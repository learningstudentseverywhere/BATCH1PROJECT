sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.batch1.presentationvariantcompanies',
            componentId: 'CompaniesList',
            contextPath: '/Companies'
        },
        CustomPageDefinitions
    );
});