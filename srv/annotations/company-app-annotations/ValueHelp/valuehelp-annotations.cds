using {companyService as my} from '../../../company-service';


annotate my.Companies with {
    company_id @Common:{
        ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Companies',
            Parameters:[
                {
                    $Type:'Common.ValueListParameterInOut',
                    LocalDataProperty:company_id,
                    ValueListProperty:'company_id'
                },
                 {
                    $Type:'Common.ValueListParameterInOut',
                    LocalDataProperty:company_name,
                    ValueListProperty:'company_name'
                }
            ]
        },
    };
    company_name @Common:{
        ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Companies',
            Parameters:[
                 {
                    $Type:'Common.ValueListParameterOut',
                    LocalDataProperty:company_id,
                    ValueListProperty:'company_id'
                },
                 {
                    $Type:'Common.ValueListParameterInOut',
                    LocalDataProperty:company_name,
                    ValueListProperty:'company_name'
                }
            ]
        },
    }
}