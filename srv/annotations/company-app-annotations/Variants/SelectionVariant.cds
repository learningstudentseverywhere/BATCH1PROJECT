using {companyService as my} from '../../../company-service';



annotate my.Companies with @UI:{

 SelectionVariant#tier1 :{
   $Type : 'UI.SelectionVariantType',
   ID:'Tier1',
   Text:'Tier 1',
   Parameters:[],
   FilterExpression:'',
   SelectOptions:[
    {
        $Type:'UI.SelectOptionType',
        PropertyName:company_status,
        Ranges:[
            {
                $Type:'UI.SelectionRangeType',
                Sign:#I,
                Option:#EQ,
                Low:'Tier1'
            }
        ]
    }
   ]
 },
 SelectionVariant#tier2 : {
    $Type:'UI.SelectionVariantType',
    ID:'Tier2',
    Text:'Tier 2',
    Parameters:[],
    FilterExpression:'',
    SelectOptions:[
        {
            $Type:'UI.SelectOptionType',
            PropertyName:company_status,
            Ranges:[
                    {
                        $Type:'UI.SelectionRangeType',
                        Sign:#I,
                        Option:#EQ,
                        Low:'Tier2'
                    }
            ]
        }
    ]
 },
 SelectionVariant#tier3 : {
    $Type:'UI.SelectionVariantType',
    ID:'Tier3',
    Text:'Tier 3',
    Parameters:[],
    FilterExpression:'',
    SelectOptions:[
        {
            $Type:'UI.SelectOptionType',
            PropertyName:company_status,
            Ranges:[
                    {
                        $Type:'UI.SelectionRangeType',
                        Sign:#I,
                        Option:#EQ,
                        Low:'Tier3'
                    }
            ]
        }
    ]
 }

};