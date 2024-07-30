//@ui5-bundle com/batch1/presentationvariantcompanies/Component-preload.js
sap.ui.require.preload({
	"com/batch1/presentationvariantcompanies/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.batch1.presentationvariantcompanies.Component",{metadata:{manifest:"json"}})});
},
	"com/batch1/presentationvariantcompanies/i18n/i18n.properties":'# This is the resource bundle for com.batch1.presentationvariantcompanies\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App for Presentation Variant\n\n#YDES: Application description\nappDescription=App for Presentation Variant\n\n#XFLD,72\nflpTitle=Presentation Variant App\n',
	"com/batch1/presentationvariantcompanies/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.batch1.presentationvariantcompanies","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.14.2","toolsId":"0209ef95-2219-408d-9ced-a296ea21d815"},"dataSources":{"mainService":{"uri":"odata/v4/company/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"ZPresent-display":{"semanticObject":"ZPresent","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.126.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.batch1.presentationvariantcompanies.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"CompaniesList","target":"CompaniesList"},{"pattern":"Companies({key}):?query:","name":"CompaniesObjectPage","target":"CompaniesObjectPage"},{"pattern":"Companies({key})/branches({key2}):?query:","name":"Companies_BranchesObjectPage","target":"Companies_BranchesObjectPage"}],"targets":{"CompaniesList":{"type":"Component","id":"CompaniesList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Companies","variantManagement":"Page","navigation":{"Companies":{"detail":{"route":"CompaniesObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}},"views":{"paths":[{"key":"tableView","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView"},{"key":"tableView1","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView1"},{"key":"tableView2","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView2"}]}}}},"CompaniesObjectPage":{"type":"Component","id":"CompaniesObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Companies","navigation":{"branches":{"detail":{"route":"Companies_BranchesObjectPage"}}}}}},"Companies_BranchesObjectPage":{"type":"Component","id":"Companies_BranchesObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Companies/branches"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
});
//# sourceMappingURL=Component-preload.js.map
