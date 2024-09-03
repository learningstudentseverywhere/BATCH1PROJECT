sap.ui.define([
    "sap/ui/core/mvc/Controller",
    './xlsx',
    'sap/m/MessageBox'
],
function (Controller,XLSX,MessageBox) {
    "use strict";

    return Controller.extend("com.schoolapp.schoolapplication.controller.Home", {
        onInit: function () {

        },
        getStudentData : function(){
            let oModel = this.getView().getModel("studentModel");
            let studentInput = oModel.getProperty("/studentInput");
            let result = ""
            let urlgetData = "/odata/v4/school/StudentFees"
            let filterUrl = "?$filter=student_id eq '" + studentInput +"'"

            $.ajax({
                url:urlgetData+filterUrl,
                dataType:"json",
                success:function(data){
                     result = data.value[0].fees_paid
                     oModel.setProperty("/studentOutput",result);
                },
                error:function(error){
                    console.log(error);
                }
            });
        },
        onNavigateToStudentPage : function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteStudentInfoDisplay",true);
        },
        onNavigateToStudentPageSmartControls:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteStudentInfoDisplaySmart",true);
        },
        onExcelUpload : function(){
            var that=this
            var excelData = {}
            //Getting the File Uploader using the ID
            var FileUploader = this.getView().byId("fileUploader")

            //Getting the file from the File Uploader
            //As default no of files selectable is one, we are getting the files as [0]
            //If multiple files are uploaded, then we'll get first file as files[0] and second file as files[1]
            var SelectedFile = FileUploader.oFileUpload.files[0]

            //Getting the type of file
            var type = SelectedFile.type


            //Creating the File Reader object as we want to read the file
            var reader = new FileReader();

            //Now to read the data in the file, we need a standard library called xlsx
            //So to read it, first do npm install xlsx
            //Then in this controller folder, add a file called xlsx.js,the content inside the file is taken from npm website,its standard code, we can copy paste in other projects too
            //Add the file path in this controller file requires section

            //Once the File Reader is loaded with the file, a function will be called 
            //This function will be triggered by code in line no 79 by reader.readAsBinaryString
            reader.onload = async function (e) {
              //e.target.result contains the data read from the file. This data is in a binary format because we're reading an Excel file.
                var data = e.target.result;
                //The XLSX library is a JavaScript library for reading and writing Excel files. The XLSX.read function takes the binary data and parses it into a workbook object, which represents the Excel file's structure (sheets, cells, etc.).
                //Here we need to give the data and the type of data.As data in binary,we are going to send type as binary
                //This we are doing to get the data sheet wise
                //When reading the file ,the data variable will have complete excel file data(multiple sheets)
                //To get the values by sheet wise, we are using xlsx library 
                var workbook = XLSX.read(data, {
                    type: 'binary'
                });

                //Looping each sheet and processing the data
                workbook.SheetNames.forEach(function (sheetName) {
                    // Here is your object for every sheet in workbook
                    //Here sheet_to_row_object_array is also from the xlsx library to convert data into json data format
                    //So in excelData, we will have the excel data
                    excelData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                 
                });

                if(excelData.length==0){
                    MessageBox.error('No data present in excel file to upload');
                    return
                }

                //Then we are building the object for the post call 
                //This loop will execute for no of records present in excel
                let dataForUpload = [];
                for (let dataFromExcel of excelData) {
                    dataForUpload.push(
                        {
                          student_id : dataFromExcel['student_id']
                        }
                )
                };
                console.log('data object from excel o be upload', dataForUpload);

                //Odata-v4 Method
                //This context method is available only for odata-v4
                var oContext = that.getOwnerComponent().getModel().bindContext("/Upload(...)");
                //This oContext.setParameter is avaialble only for odata version v4,in v2 this setparameter will not work
                //The /Upload means we are referring to a function in backend and (...) means the function has some parameters
                oContext.setParameter("data", dataForUpload);

                try{
                    //This execute will call a batch call to the function import with the parameter
                    let respnse = await oContext.execute();
                }
                catch(error){
                    MessageBox.show('Error while Uploading')
                }

               //Odata-v4 method

               //Odata-v2 method
               
               // For Odata-v2 , we need to go for oModel.read(/functionimport name and passing the payload)

               //Odata-v2 method
            console.log("Entered upload url");
            }

            //If there is any error in reading the file , then this callback will be called
            reader.onerror = function (ex) {
                MessageBox.error(ex);
            };

            //Loading the file reader with the file
            //So this function will trigger the reader.onload function
            reader.readAsBinaryString(SelectedFile);
        }
    });
});
