const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    college: { type: String },
    yearPassedOn: { type: Number },
    graduated: { type: String },
    school: { type: String },
    yearsAttended: { type: Number },
    skills: { type: String },
    certification: { type: String }
})

module.exports = mongoose.model('EducationDetails', educationSchema)

// PostMan Verification:
// Post: "localhost:8082/api/education"
// {	
//     "_id": "5ee246a0043dbf0774025a8f",
//     "college": "SMIT",
//     "yearPassedOn": "2020",
//     "graduated": "Yes",
//     "school": "CSI Bain",
//     "yearsAttended": "05",
//     "skills": "Programming",
//     "certification": "Microsoft"
// }
