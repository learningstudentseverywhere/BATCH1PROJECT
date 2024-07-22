const cds = require('@sap/cds');


module.exports = cds.service.impl(async function(){

    this.on('IncreasenoofpeoplebyTen',async req=>{
            console.log("Entered the Increase Functinality");
            let Target_Entity = req.target
            const [{company_id,IsActiveEntity}] = req.params
            
            //Fetching the records
            let companyData = await SELECT.from(Target_Entity).where(req.query.SELECT.from.ref[0].where);

            //Increasing the no of people by 10
            companyData[0].no_of_people_using_transport = companyData[0].no_of_people_using_transport + 10

            //Update it back to the database table
            await UPDATE.entity(Target_Entity).data(companyData[0]).where({company_id:company_id});

            //Return the updated values to the UI
            return this.read(Target_Entity,{company_id,IsActiveEntity});
            console.log(companyData);

    });

    this.on('IncreasenoofpeoplebyCustomValue',async req=>{
        console.log("Entered");
        let EnteredValueFromUser = req.data.inputPeople
 
        let Target_Entity = req.target

        const [{company_id,IsActiveEntity}] = req.params

        //Fetching the records
        let companyData = await SELECT.from(Target_Entity).where(req.query.SELECT.from.ref[0].where)

        //Increaising the no of people 
        companyData[0].no_of_people_using_transport = companyData[0].no_of_people_using_transport + EnteredValueFromUser


        //Updating it back to the database table
        await UPDATE.entity(Target_Entity).data(companyData[0]).where({company_id:company_id});

        //Return the new value from the table
        return this.read(Target_Entity,{company_id,IsActiveEntity});
    })
})