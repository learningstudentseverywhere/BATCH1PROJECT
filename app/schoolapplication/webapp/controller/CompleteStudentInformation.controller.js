sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.schoolapp.schoolapplication.controller.Controller", {
        onInit: function () {

        },
        getCompleteStudentInfo : function(){
            var oModel = this.getView().getModel("studentModel");
            let urlgetData = "/odata/v4/school/Students"
            let result = []
            $.ajax({
                url:urlgetData,
                dataType:"json",
                success:function(data){
                   result = data.value
                   oModel.setProperty("/StudentData",result)
                },
                error:function(error){
                    console.log(error);
                }
            })
        },
        updateStudentData : function(){
            var oModel = this.getView().getModel("studentModel");
            var studentId = oModel.getProperty("/StudentInputSecondPage");
            var feesToUpdate = oModel.getProperty("/StudentInputFeesSecondPage");

            var payloadForUpdate = {
                "fees_paid":feesToUpdate
            }
            let url = "/odata/v4/school/StudentFees"
            let updateUrl = "(student_id='" +studentId +"')";

            $.ajax({
                url:url+updateUrl,
                contentType:"application/json",
                type:"PATCH",
                data:JSON.stringify(payloadForUpdate),
                dataType:"json",
                success:function(oResult){
                    console.log("Updated SuccessFully");
                },
                error:function(oError){
                    console.log(oError);
                }

            });
        }
    });
});
