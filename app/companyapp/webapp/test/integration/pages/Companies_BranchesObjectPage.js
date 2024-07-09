sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.company.companyapp',
            componentId: 'Companies_BranchesObjectPage',
            contextPath: '/Companies/branches'
        },
        CustomPageDefinitions
    );
});