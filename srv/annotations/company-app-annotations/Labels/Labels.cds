using {companyService as my} from '../../../company-service';



annotate my.Companies with {
    company_id @title : 'Company Id';
    company_name @title :'Company Name';
}

annotate my.Companies_Branches with {
    company_id @title : 'Company Id';
    branch_id @title: 'Branch Id';
    branch_location @title : 'Branch Location';
}