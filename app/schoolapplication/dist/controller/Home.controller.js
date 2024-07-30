sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("com.schoolapp.schoolapplication.controller.Home",{onInit:function(){},getStudentData:function(){let t=this.getView().getModel("studentModel");let e=t.getProperty("/studentInput");let o="";let n="/odata/v4/school/StudentFees";let u="?$filter=student_id eq '"+e+"'";$.ajax({url:n+u,dataType:"json",success:function(e){o=e.value[0].fees_paid;t.setProperty("/studentOutput",o)},error:function(t){console.log(t)}})},onNavigateToStudentPage:function(){var t=sap.ui.core.UIComponent.getRouterFor(this);t.navTo("RouteStudentInfoDisplay",true)},onNavigateToStudentPageSmartControls:function(){var t=sap.ui.core.UIComponent.getRouterFor(this);t.navTo("RouteStudentInfoDisplaySmart",true)}})});
//# sourceMappingURL=Home.controller.js.map