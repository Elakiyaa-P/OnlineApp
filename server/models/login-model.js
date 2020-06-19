const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
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
    skills: { type: String }
})

module.exports = mongoose.model('Login', loginSchema)