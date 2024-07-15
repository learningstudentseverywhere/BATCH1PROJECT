using {companyService as my} from '../../../company-service';


//@UI , UI is an object
//Selection Fields is an array inside UI object,It is for Filterbar
//LineItem is also an array inside UI Object
//UI.Datafield is used for showing Text data, whereas UI.Datafieldforaction is sued for buttons
annotate my.Companies with @UI:{
 SelectionFields  : [
     company_id,
     company_name
 ],
 LineItem  : [
     {
        $Type:'UI.DataField',
        Value : company_id
     },
     {
        $Type:'UI.DataField',
        Value : company_name
     }
 ],
 HeaderInfo  : {
     $Type : 'UI.HeaderInfoType',
     TypeName : 'Company Data',
     TypeNamePlural : 'Companies Data',
     Title:{
        $Type:'UI.DataField',
        Value : company_id
     }
 },
 HeaderFacets  : [
     {
        $Type:'UI.ReferenceFacet',
        ID:'CompanyDetails',
        Label : 'Company Basic Details',
        Target : '@UI.FieldGroup#CompanyBasicDetails'
     },
      {
        $Type:'UI.ReferenceFacet',
        ID:'CompanyIdDetails',
        Label : 'Company ID',
        Target : '@UI.FieldGroup#CompanyIDDetails'
     }
 ],
 FieldGroup#CompanyBasicDetails : {
     $Type : 'UI.FieldGroupType',
     Data : [
        {
            $Type:'UI.DataField',
            Value:company_id
        },
        {
            $Type:'UI.DataField',
            Value : company_name
        }
     ]
 },
 FieldGroup#CompanyIDDetails:{
    $Type:'UI.FieldGroupType',
    Data:[
        {
            $Type:'UI.DataField',
            Value:company_id
        }
    ]
 },
 Facets:[
    {
        $Type:'UI.ReferenceFacet',
        ID:'CompanyDetailsSection',
        Label : 'Company Section Info',
        Target:'@UI.FieldGroup#CompanyBasicDetailsSection'
    },
     {
        $Type:'UI.ReferenceFacet',
        ID:'CompanyName',
        Label : 'Company Name Info',
        Target:'@UI.FieldGroup#CompanyNameDetailsSection'
    },
    {
        $Type:'UI.ReferenceFacet',
        ID:'CompanyBranchDetails',
        Label:'Company Branch Details',
        Target : 'branches/@UI.LineItem' //Go for the LineItem annotation of the branches target table
    }
 ],
 FieldGroup#CompanyBasicDetailsSection :{
    $Type :'UI.FieldGroupType',
    Data : [
        {
            $Type:'UI.DataField',
            Value : company_name
        }
    ]
 },
 FieldGroup#CompanyNameDetailsSection :{
   $Type :'UI.FieldGroupType',
    Data : [
        {
            $Type:'UI.DataField',
            Value : company_id
        }
    ]
 }
};


annotate my.Companies_Branches with @UI:{
    LineItem  : [
        {
            $Type:'UI.DataField',
            Value : branch_id
        },
        {
            $Type:'UI.DataField',
            Value:branch_location
        }
    ]
};