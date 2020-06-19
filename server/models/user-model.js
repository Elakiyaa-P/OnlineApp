const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     name: { type: String },
//     emailId: { type: String },
//     password: { type: String },
//     mobile: { type: Number },
//     line1: { type: String },
//     line2: { type: String },
//     city: { type: String },
//     state: { type: String },
//     postalCode: { type: Number },
//     country: { type: String },
//     year: { type: Number },
//     month: { type: Number },
//     skills: { type: String },
//     resume: { type: String },
//     college: { type: String },
//     yearPassedOn: { type: Number },
//     graduated: { type: String },
//     school: { type: String },
//     yearsAttended: { type: Number },
//     skills: { type: String },
//     certification: { type: String },
//     currentEmployer: { type: String },
//     destination: { type: String },
//     currentJobDescription: { type: String },
//     currentExperience: { type: Number },
//     previousEmployer: { type: String },
//     previousJobDescription: { type: String },
//     previousExperience: { type: Number }
// })


const userSchema = new mongoose.Schema({

    email: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema)