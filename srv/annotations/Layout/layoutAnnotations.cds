using {schoolService as service} from '../../school-service';



annotate service.Students with @UI:{
 SelectionFields  : [
     student_id
 ],
 LineItem  : [
     {
        $Type:'UI.DataField',
        Value:student_id
     }
 ]
};


annotate service.Students with {
    student_id @title:'Student ID' 
}