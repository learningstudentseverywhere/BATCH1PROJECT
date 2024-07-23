sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        AddBranch: function(oEvent) {
            this.loadFragment({
                id:"BranchDialog",
                name:"com.company.companyapp.ext.fragments.AddBranch"
            }).then(function(oDialog){
                oDialog.open();
            });
        }
    };
});
