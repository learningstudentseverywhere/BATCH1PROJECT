sap.ui.define(
    ["sap/fe/core/AppComponent", "sap/ui/model/json/JSONModel"],
    function (Component,JSONModel) {
        "use strict";

        return Component.extend("com.company.companyapp.Component", {
            metadata: {
                manifest: "json"
            },
            init : function(){
                Component.prototype.init.apply(this,arguments);

                var oCompanyBranchData = {
                    BranchId:"aaaa",
                    BranchLocation:"bbbb"
                }

                this.setModel(new JSONModel(oCompanyBranchData),"branchModel");
            }
        });
    }
);