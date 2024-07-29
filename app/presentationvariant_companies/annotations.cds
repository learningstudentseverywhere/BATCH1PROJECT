using companyService as service from '../../srv/company-service';
using from '../../srv/annotations/company-app-annotations/Layout/Layout-annotations';



annotate service.Companies with @(
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
                {
                    $Type:'UI.SelectOptionType',
                    PropertyName:company_status,
                    Ranges : [
                        {
                            $Type:'UI.SelectionRangeType',
                            Sign:#I,
                            Option:#EQ,
                            Low:'Tier1'
                        }
                    ]
                    }
                ],
        },
        Text : 'Tier1',
    },
    UI.LineItem #tableView : [
        
        {
            $Type : 'UI.DataField',
            Value : company_id,
        },{
            $Type : 'UI.DataField',
            Value : company_name,
        },{
            $Type : 'UI.DataField',
            Value : company_status,
            Label : 'company_status',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'companyService.IncreasenoofpeoplebyTen',
            Label : 'IncreasenoofpeoplebyTen',
        },],
    UI.SelectionPresentationVariant #tableView1 : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
                {
                    $Type:'UI.SelectOptionType',
                    PropertyName:company_status,
                    Ranges : [
                        {
                            $Type:'UI.SelectionRangeType',
                            Sign:#I,
                            Option:#EQ,
                            Low:'Tier2'
                        }
                    ]
                }
            ],
        },
        Text : 'Tier 2',
    }
);
annotate service.Companies with @(
    UI.LineItem #tableView1 : [
        {
            $Type : 'UI.DataField',
            Value : company_id,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'companyService.IncreasenoofpeoplebyCustomValue',
            Label : 'IncreasenoofpeoplebyCustomValue',
        },],
    UI.SelectionPresentationVariant #tableView2 : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView1',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
                 {
                    $Type:'UI.SelectOptionType',
                    PropertyName:company_status,
                    Ranges : [
                        {
                            $Type:'UI.SelectionRangeType',
                            Sign:#I,
                            Option:#EQ,
                            Low:'Tier3'
                        }
                    ]
                }
            ],
        },
        Text : 'Tier 3',
    }
);
