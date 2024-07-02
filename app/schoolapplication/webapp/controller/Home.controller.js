sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
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
        }
    });
});
