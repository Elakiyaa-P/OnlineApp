const PersonalDetails = require('../../models/personal-model')

module.exports = function (router) {
  router.post('/personal', function (req, res) {
    let personal = new PersonalDetails(req.body)
    personal.save(function (err, personal) {
      if (err) {
        return res.status(400).json(err)
      }
      res.status(200).json(personal)
    })
  })

  router.get('/personal', function (req, res) {
    PersonalDetails.find({}, function (err, personal) {
      if (err) {
        res.json({ status: 'failure', message: err })
      }
      else {
        if (!personal) {
          res.json({ status: 'failure', message: 'No Personal Detail Found' })
        }
        else {
          res.json({ status: 'success', personal: personal })
        }
      }
    })
  })

  router.get('/personal/:id', function (req, res) {
    if (!req.params.id) {
      res.json({ status: 'failure', message: 'No id provided' })
    }
    else {
      PersonalDetails.findOne({ _id: req.params.id }, function (err, personal) {
        if (err || !personal) {
          res.json({ status: 'failure', message: 'Invalid Id' })
        }
        else {
          res.json({ status: 'success', personal: personal })
        }
      })
    }
  })

  router.put('/personal', function (req, res) {
    if (!req.body._id) {
      res.json({ status: 'failure', message: 'No id provided' })
    }
    else {
      PersonalDetails.findOne({ _id: req.body._id }, function (err, personal) {
        if (err) {
          res.json({ status: 'failure', message: 'No id provided' })
        }
        else {
          personal.name = req.body.name
          personal.emailId = req.body.emailId
          personal.password = req.body.password
          personal.mobile = req.body.mobile
          personal.line1 = req.body.line1
          personal.line2 = req.body.line2
          personal.city = req.body.city
          personal.state = req.body.state
          personal.postalCode = req.body.postalCode
          personal.country = req.body.country
          personal.year = req.body.year
          personal.month = req.body.month
          personal.skills = req.body.skills
          personal.resume = req.body.resume

          personal.save(function (err) {
            if (err) {
              res.json({ status: 'failure', message: err })
            }
            else {
              res.json({ status: 'success', message: 'Personal Detail updated' })
            }
          })
        }
      })
    }
  })

  router.delete('/personal/:id', function (req, res) {
    if (!req.params.id) {
      res.json({ status: 'failure', message: 'No id provided' })
    }
    else {
      PersonalDetails.findOne({ _id: req.params.id }, function (err, personal) {
        if (err || !personal) {
          res.json({ status: 'failure', message: err })
        }
        else {
          personal.remove(function (err) {
            if (err) {
              res.json({ status: 'failure', message: err })
            }
            else {
              res.json({ status: 'success', message: 'Personal Details Deleted' })
            }
          })
        }
      })
    }
  })
}