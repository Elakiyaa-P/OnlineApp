const mongoose = require('mongoose')

const personalSchema = new mongoose.Schema({
    name: { type: String },
    emailId: { type: String },
    password: { type: String },
    mobile: { type: Number },
    line1: { type: String },
    line2: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: Number },
    country: { type: String },
    year: { type: Number },
    month: { type: Number },
    skills: { type: String },
    resume: { type: String }
})

module.exports = mongoose.model('PersonalDetails', personalSchema)


// PostMan Verification:
// Post: localhost:/8082/api/personal
// {	
//     "name":"Elite",
//     "emailId":"elakiyaa5118@gmail.com",
//     "password":"qwerty",
//     "mobile":"6576898765",
//     "line1":"MSM st",
//     "line2":"Sembium Perambur",
//     "city":"Chennai",
//     "state":"TN",
//     "postalCode":"600011",
//     "country":"India",
//     "year":"02",
//     "month":"12",
//     "skills":"Programming",
//     "resume":"Uploaded"
// }
