using {company as my} from '../db/company-model';



service companyService{
    entity Companies as projection on my.Companies;
    entity Companies_Branches as projection on my.Companies_Branches;
}