using {maybatch as my} from '../db/data-model';


service schoolService{
    entity Students as projection on my.Students;
    entity StudentFees as projection on my.StudentFees;
    entity Transport as projection on my.Transport;
    entity CompleteStudentInfo as projection on my.CompleteStudentInfo;
    entity Teachers as projection on my.Teachers;
    entity kids as projection on my.kids;

    //Excel Upload
     @open
    entity ExcelData {
      student_id : String;
    };

    entity ExcelDataReturn {
      student_id : String;
    };
     //action Upload(data : many ExcelData, whollyUpload : Boolean) returns ZCDSEBPS0012;
     action Upload(data : many Students) returns ExcelDataReturn;
}