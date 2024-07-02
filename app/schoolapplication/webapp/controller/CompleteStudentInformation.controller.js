sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.schoolapp.schoolapplication.controller.Controller", {
            onInit: function () {

            },
            getCompleteStudentInfo: function () {
                var oModel = this.getView().getModel("studentModel");
                let urlgetData = "/odata/v4/school/Students"
                let result = []
                $.ajax({
                    url: urlgetData,
                    dataType: "json",
                    success: function (data) {
                        result = data.value
                        oModel.setProperty("/StudentData", result)
                    },
                    error: function (error) {
                        console.log(error);
                    }
                })
            },
            updateStudentData: function () {
                var oModel = this.getView().getModel("studentModel");
                var studentId = oModel.getProperty("/StudentInputSecondPage");
                var feesToUpdate = oModel.getProperty("/StudentInputFeesSecondPage");

                var payloadForUpdate = {
                    "fees_paid": feesToUpdate
                }
                let url = "/odata/v4/school/StudentFees"
                let updateUrl = "(student_id='" + studentId + "')";

                $.ajax({
                    url: url + updateUrl,
                    contentType: "application/json",
                    type: "PATCH",
                    data: JSON.stringify(payloadForUpdate),
                    dataType: "json",
                    success: function (oResult) {
                        console.log("Updated SuccessFully");
                    },
                    error: function (oError) {
                        console.log(oError);
                    }

                });
            },
            createStudentData: async function () {

                let oModel = this.getView().getModel("studentModel");
                let inputStudentId = oModel.getProperty("/StudentInputCreate");
                let inputStudentFees = oModel.getProperty("/StudentFeesInputCreate");

                //Create Student Fees Data
                let studentFeesUrl = "/odata/v4/school/StudentFees"
                let postValuesOfFees = {
                    "student_id": inputStudentId,
                    "fees_paid": inputStudentFees
                }

                try {
                    let studentFeesCallStatus = await this.apiCall(studentFeesUrl, postValuesOfFees)
                    console.log(studentFeesCallStatus);
                }
                catch (error) {
                    console.log(error);
                }


                //Creating Student Data
                let studentUrl = "/odata/v4/school/Students"
                let postValues = {
                    "student_id": inputStudentId
                }

                let studentCreateStatus = await this.apiCall2(studentUrl, postValues)
                console.log(studentCreateStatus);

            },
            deleteStudentData: function () {
                let oModel = this.getView().getModel('studentModel')
                let studentid = oModel.getProperty("/StudentInputForDelete");

                //Delete
                let url = "/odata/v4/school/Students"
                let deleteUrl = "(student_id='" + studentid + "')"

                $.ajax({
                    url: url + deleteUrl,
                    contentType: "application/json",
                    type: "DELETE",
                    dataType: "json",
                    success: function (oResult) {
                        console.log(oResult);
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                });

            },
            apiCall: function (studentFeesUrl, postValuesOfFees) {

                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: studentFeesUrl,
                        contentType: "application/json",
                        type: "POST",
                        data: JSON.stringify(postValuesOfFees),
                        dataType: "json",
                        success: function (oResult) {
                            console.log("Created Fees DataSuccessfully");
                            resolve("Succesfully Created Fees table");
                        },
                        error: function (oError) {
                            console.log("Error While creating Student Fees Data");
                            reject("Error Occured while creating")
                        }
                    });

                });

            },
            apiCall2: function (studentUrl, postValues) {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: studentUrl,
                        contentType: "application/json",
                        type: "POST",
                        data: JSON.stringify(postValues),
                        dataType: "json",
                        success: function (oResult) {
                            resolve("Created Successfully");
                        },
                        error: function (oError) {
                            reject("Error While creating Student");
                        }
                    });
                });
            }
        });
    });
