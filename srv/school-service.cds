using {maybatch as my} from '../db/data-model';


service schoolService{
    entity Students as projection on my.Students;
    entity StudentFees as projection on my.StudentFees;
}