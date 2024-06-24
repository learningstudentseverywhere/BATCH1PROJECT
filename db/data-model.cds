namespace maybatch;
using {managed, cuid} from '@sap/cds/common';
//Aspects
//Aspects are used for reducing the human effort in doing the standard functinlaity
//Managed and cuid


entity Students{
    key student_id : String;
}

entity StudentFees{
    key student_id : String;
        fees_paid : String;
}

entity Transport{
    key student_id : String;
        Bus_no : String;
}

entity CompleteStudentInfo{
    key student_id : String;
        fees_paid : String;
        Bus_no : String;
}


entity Teachers:managed{
    key teacher_id : String;
        teacher_name : String;
}

entity kids : cuid{
     kid_name : String;
}