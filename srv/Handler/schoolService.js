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

    //After Event
    //After event will trigger if there is no error/rejections from the before
    that.after('CREATE','Students',async req=>{
        console.log("Entered After");
        let student_id = req.student_id;
        let postData = {
            "student_id":student_id,
            "Bus_no":"1"
        }

       try{
        await INSERT.into('maybatch_Students').entries(postData);
       }
      catch(error){
        console.log(error);
      }
      console.log("End");
    });

    //On Event
    //On Event will be used for Custom Entities mostly
    //On Event will override the existing functionality of CAPM Framework
    that.on('READ','CompleteStudentInfo',async req=>{
        console.log("Entered On Event");
        let fees_paid_value = [];
        let bus_no_value = [];
        let student_id_input =req.data.student_id
        let finalResponse = {
            "student_id" : student_id_input,
        "fees_paid" : "",
        "Bus_no" : ""
        }
        
        try{
        fees_paid_value = await SELECT.from('maybatch_StudentFees').where({student_id:student_id_input});
        bus_no_value = await  SELECT.from('maybatch_Transport').where({student_id:student_id_input});
        }
        catch(error){
            console.log(error);
        }

        finalResponse = {
            "student_id" : student_id_input,
        "fees_paid" : fees_paid_value[0].FEES_PAID,
        "Bus_no" : bus_no_value[0].BUS_NO
        }

        req.reply(finalResponse)
        console.log(finalResponse);
    });
}

module.exports = registerschoolServiceHandler;
