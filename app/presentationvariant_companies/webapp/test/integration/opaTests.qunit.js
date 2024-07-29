sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/batch1/presentationvariantcompanies/test/integration/FirstJourney',
		'com/batch1/presentationvariantcompanies/test/integration/pages/CompaniesList',
		'com/batch1/presentationvariantcompanies/test/integration/pages/CompaniesObjectPage',
		'com/batch1/presentationvariantcompanies/test/integration/pages/Companies_BranchesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CompaniesList, CompaniesObjectPage, Companies_BranchesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/batch1/presentationvariantcompanies') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCompaniesList: CompaniesList,
					onTheCompaniesObjectPage: CompaniesObjectPage,
					onTheCompanies_BranchesObjectPage: Companies_BranchesObjectPage
                }
            },
            opaJourney.run
        );
    }
);