using {company as my} from '../db/company-model';



service companyService{
    entity Companies as projection on my.Companies actions{

        @Common.IsActionCritical:true
        action IncreasenoofpeoplebyTen() returns Companies;
    };
    entity Companies_Branches as projection on my.Companies_Branches;
}