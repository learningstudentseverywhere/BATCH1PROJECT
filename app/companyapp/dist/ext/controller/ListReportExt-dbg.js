sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
  
    function GetBranchDetails(oExtensionAPI,Entity){
        var oUploadDialog;
        
        function closeDialog(){
            oUploadDialog   && oUploadDialog.close();
        }

        return {
            onBeforeOpen:function(oEvent){ 
                //Create new instance
                 oUploadDialog = oEvent.getSource();               //Getting the dialog box instance
                 oExtensionAPI.addDependent(oUploadDialog)            //Assignnig the dialog box to the Main List report instance
            },
            onAfterClose : function(oEvent){
                 //Destroy the new instance
                 oExtensionAPI.removeDependent(oUploadDialog);
                 oUploadDialog.destroy();
                 oUploadDialog=undefined;
            },
            onOk : function(oEvent){
            //Fetching the selected record company id
               let selectedContextsPath = oExtensionAPI.getSelectedContexts()[0]
               let selectedContextsValue  = selectedContextsPath.getObject();
               let company_id_selected = selectedContextsValue.company_id;

               //Getting the values from the Input box of fragment
               let oLocalModel = oExtensionAPI._view.getModel('branchModel');
               let branchId = oLocalModel.getProperty("/BranchId");
               let branchlocation = oLocalModel.getProperty("/BranchLocation");


               //Preparing the payload
               let postData = {
                "company_id" : company_id_selected,
                "branch_id":branchId,
                "branch_location":branchlocation
               }

               //Ajax call
               $.ajax({
                url:"/odata/v4/company/Companies_Branches",
                contentType:"application/json",
                type:"POST",
                data : JSON.stringify(postData),
                dataType:"json",
                success:function(oResult){
                    console.log("Success");
                    closeDialog();
                },
                error:function(oError){
                    console.log("Error");
                    closeDialog();
                }
               })


            },
            onCancel : function(oEvent){
                closeDialog();
            }
        }
    }


    return {
        AddBranch: function(oEvent) {
            this.loadFragment({
                id:"BranchDialog",
                name:"com.company.companyapp.ext.fragments.AddBranch",
                controller : GetBranchDetails(this,'Companies')
            }).then(function(oDialog){
                oDialog.open();
            });
        }
    };
});
