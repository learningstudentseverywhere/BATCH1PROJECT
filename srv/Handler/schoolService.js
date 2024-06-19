var registerschoolServiceHandler  = function (that,cds){

//Before Event is used for doing the validation checks
//Check whether the studetn has paid the fees, if paid , then allow to create record in student table
//Else , give error as 'First pay the fees'
    that.before('READ','Students',async req => {
        console.log("Entered Before Functionality");
    });

    that.before('CREATE','Students',async req =>{
        console.log('Entered before of POST');
        let inputStudentData = req.data.student_id
        let datapresentinStudentFees =await SELECT.from('maybatch_StudentFees').where({student_id:inputStudentData});

        if(datapresentinStudentFees.length==0){
            req.reject({
                code:"500",
                message:"Please pay the fees before trying to enter in Student Table"
            });
        }
        console.log(datapresentinStudentFees);

    })
}

module.exports = registerschoolServiceHandler;
