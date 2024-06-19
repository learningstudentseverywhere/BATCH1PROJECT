namespace maybatch;


entity Students{
    key student_id : String;
}

entity StudentFees{
    key student_id : String;
        fees_paid : String;
}