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
 }
};