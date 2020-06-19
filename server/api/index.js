const express = require('express')
const router = express.Router()
    //Admin
require('./routes/job')(router)
    //Users
require('./routes/personal')(router)
require('./routes/education')(router)
require('./routes/employment')(router)

// require('./routes/login')(router)

// require('./routes/user')(router)

module.exports = router