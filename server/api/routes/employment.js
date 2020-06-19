const EmploymentDetails = require('../../models/employment-model')

module.exports = function (router) {
  router.post('/employment', function (req, res) {
    let employment = new EmploymentDetails(req.body)
    employment.save(function (err, employment) {
      if (err) {
        return res.status(400).json(err)
      }
      res.status(200).json(employment)
    })
  })

  router.get('/employment', function (req, res) {
    EmploymentDetails.find({}, function (err, employment) {
      if (err) {
        res.json({ status: 'failure', message: err })
      }
      else {
        if (!employment) {
          res.json({ status: 'failure', message: 'No Employment Detail Found' })
        }
        else {
          res.json({ status: 'success', employment: employment })
        }
      }
    })
  })

  router.get('/employment/:id', function (req, res) {
    if (!req.params.id) {
      res.json({ status: 'failure', message: 'No id provided' })
    }
    else {
      EmploymentDetails.findOne({ _id: req.params.id }, function (err, employment) {
        if (err || !employment) {
          res.json({ status: 'failure', message: 'Invalid Id' })
        }
        else {
          res.json({ status: 'success', employment: employment })
        }
      })
    }
  })

  router.put('/employment', function (req, res) {
    if (!req.body._id) {
      res.json({ status: 'failure', message: 'No id provided' })
    }
    else {
      EmploymentDetails.findOne({ _id: req.body._id }, function (err, employment) {
        if (err) {
          res.json({ status: 'failure', message: 'No id provided' })
        }
        else {
          employment.currentEmployer = req.body.currentEmployer
          employment.destination = req.body.destination
          employment.currentJobDescription = req.body.currentJobDescription
          employment.currentExperience = req.body.currentExperience
          employment.previousEmployer = req.body.previousEmployer
          employment.previousJobDescription = req.body.previousJobDescription
          employment.previousExperience = req.body.previousExperience

          employment.save(function (err) {
            if (err) {
              res.json({ status: 'failure', message: err })
            }
            else {
              res.json({ status: 'success', message: 'Employment Detail updated' })
            }
          })
        }
      })
    }
  })

  router.delete('/employment/:id', function (req, res) {
    if (!req.params.id) {
      res.json({ status: 'failure', message: 'No id provided' })
    }
    else {
      EmploymentDetails.findOne({ _id: req.params.id }, function (err, employment) {
        if (err || !employment) {
          res.json({ status: 'failure', message: err })
        }
        else {
          employment.remove(function (err) {
            if (err) {
              res.json({ status: 'failure', message: err })
            }
            else {
              res.json({ status: 'success', message: 'Employment Details Deleted' })
            }
          })
        }
      })
    }
  })
}