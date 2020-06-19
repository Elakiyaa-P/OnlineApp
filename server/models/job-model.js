const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    jobId: { type: String },
    jobTitle: { type: String },
    jobPostedDate: { type: Date },
    role: { type: String },
    responsibility: { type: String },
    companyName: { type: String },
    experienceRequired: { type: String },
    salaryPackage: { type: String },
    positionsAvailable: { type: String },
    location: { type: String },
    skillsRequired: { type: String },
    degree: { type: String },
    companyInformation: { type: String },
    employmentType: { type: String },
    industryType: { type: String },
    jobDescription: { type: String }
})

module.exports = mongoose.model('Jobs', jobSchema)

// PostMan Verification:
// Post: "localhost:8082/api/job"
// {	
// 	"jobId":"123456",
//     "jobTitle":"Program",
//     "jobPostedDate":"05/11/1998",
//     "role":"Programmer Analyst",
//     "responsibility":"Work Hard",
//     "companyName":"CTS",
//     "experienceRequired":"5",
//     "salaryPackage":"20000",
//     "positionsAvailable":"2",
//     "location":"Chennai",
//     "skillsRequired":"Programming",
//     "degree":"UG",
//     "companyInformation":"MNC",
//     "employmentType":"FTE",
//     "industryType":"Software",
//     "jobDescription":"Good Company"
// }
