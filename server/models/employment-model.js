const mongoose = require('mongoose')

const employmentSchema = new mongoose.Schema({
    currentEmployer: { type: String },
    destination: { type: String },
    currentJobDescription: { type: String },
    currentExperience: { type: Number },
    previousEmployer: { type: String },
    previousJobDescription: { type: String },
    previousExperience: { type: Number }
})

module.exports = mongoose.model('EmploymentDetails', employmentSchema)

// Postman Verification:
// Post:- localhost:8082/api/employment
// {	
//     "_id": "5ee246a0043dbf0774025a8f",
//     "currentEmployer": "Elite",
//     "destination": "Somewhere",
//     "currentJobDescription": "Cognizant",
//     "currentExperience": "01",
//     "previousEmployer": "Elaks",
//     "previousJobDescription": "SVCE",
//     "previousExperience": "01"
// }