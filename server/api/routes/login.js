const express = require("express")
const login = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const Login = require("../../models/login-model")
login.use(cors())

process.env.SECRET_kEY = "secret"

login.post('/register', (req, res) => {
    const loginData = {
        name: req.body.name,
        emailId: req.body.emailId,
        password: req.body.password,
        mobile: req.body.mobile,
        line1: req.body.line1,
        line2: req.body.line2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        country: req.body.country,
        year: req.body.year,
        month: req.body.month,
        skills: req.body.skills
    }

    Login.findOne({
        emailId: req.body.emailId
    })

    //     .then(user => {
    //       if (!user) {
    //         bcrypt.hash(req.body.password, 10, (err, hash) => {
    //           loginData.password = hash
    //           Login.create(loginData)
    //             .then(user => {
    //               res.json({ status: user.emailId + ' is Registered' })
    //             })
    //             .catch(err => {
    //               res.send('error:' + err)
    //             })
    //         })
    //       }
    //       else {
    //         res.json({ error: 'User already exists' })
    //       }
    //     })
    //     .catch(err => {
    //       res.send('error:' + err)
    //     })
    // })

    //TODO bcrypt
    .then(user => {
            if (!user) {
                Login.create(loginData)
                    .then(user => {
                        const payload = {
                            _id: user._id,
                            name: user.name,
                            emailId: user.emailId,
                            mobile: user.mobile,
                            line1: user.line1,
                            line2: user.line2,
                            city: user.city,
                            state: user.state,
                            postalCode: user.postalCode,
                            country: user.country,
                            year: user.year,
                            month: user.month,
                            skills: user.skills
                        }
                        let token = jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        })
                        res.json({ token: token })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            } else {
                res.json({ error: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

// login.post('/login', (req, res) => {
//     Login.findOne({
//             emailId: req.body.emailId
//         })
//         .then(user => {
//             if (user) {
//                 if (bcrypt.compareSync(req.body.password, user.password)) {
//                     const payload = {
//                         _id: user._id,
//                         emailId: user.emailId
//                     }
//                     let token = jwt.sign(payload, process.env.SECRET_kEY, {
//                         expiresIn: 1440
//                     })
//                     res.json({ token: token })
//                 } else {
//                     res.json({ error: 'User does not exist' })
//                 }
//             } else {
//                 res.json({ error: 'User does not exist' })
//             }
//         })
//         .catch(err => {
//             res.send('error:' + err)
//         })
// })

login.post('/login', (req, res) => {
    Login.findOne({
            email: req.body.email
        })
        .then(user => {
            if (user) {
                const payload = {
                    _id: user._id,
                    name: user.name,
                    emailId: user.emailId,
                    mobile: user.mobile,
                    line1: user.line1,
                    line2: user.line2,
                    city: user.city,
                    state: user.state,
                    postalCode: user.postalCode,
                    country: user.country,
                    year: user.year,
                    month: user.month,
                    skills: user.skills
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.json({ token: token })
            } else {
                res.json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

login.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_kEY)

    Login.findOne({
            _id: decoded._id
        })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send('User does not exist!')
            }
        })
        .catch(err => {
            res.send('error:' + err)
        })
})

module.exports = login