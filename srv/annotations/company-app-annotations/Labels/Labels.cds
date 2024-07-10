using {companyService as my} from '../../../company-service';



annotate my.Companies with {
    company_id @title : 'Company Id';
    company_name @title :'Company Name';
}