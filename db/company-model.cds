namespace company;


entity Companies { 
    key company_id : String;
        company_name : String;
        no_of_people_using_transport:Integer;
        branches : Association to many Companies_Branches on branches.company_id = $self.company_id;

}


entity Companies_Branches {
    key company_id : String;
    key branch_id : String;
        branch_location : String;
}