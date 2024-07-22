using {company as my} from '../db/company-model';



service companyService{
    entity Companies as projection on my.Companies actions{

        @Common.IsActionCritical:true
        action IncreasenoofpeoplebyTen() returns Companies;

        action IncreasenoofpeoplebyCustomValue(inputPeople:inputValue:no_of_people_customvalue @mandatory) returns Companies;
    };
    entity Companies_Branches as projection on my.Companies_Branches;

    type inputValue : {
        no_of_people_customvalue : Integer @Common.Label : 'Enter No of People'
    }
}