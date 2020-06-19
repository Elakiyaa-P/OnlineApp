const EducationDetails = require('../../models/education-model')

module.exports = function (router) {
  router.post('/education', function (req, res) {
    let education = new EducationDetails(req.body)
    education.save(function (err, education) {
      if (err) {
        return res.status(400).json(err)
      }
      res.status(200).json(education)
    })
  })

  router.get('/education', function (req, res) {
    EducationDetails.find({}, function (err, education) {
      if (err) {
        res.json({ status: 'failure', message: err })
      }
      else {
        if (!education) {
          res.json({ status: 'failure', message: 'No Education Detail Found' })
        }
        else {
          res.json({ status: 'success', education: education })
        }
      }
    })
  })

  router.get('/education/:id', function (req, res) {
    if (!req.params.id) {
      res.json({ status: 'failure', message: 'No id provided' })
    }
    else {
      EducationDetails.findOne({ _id: req.params.id }, function (err, education) {
        if (err || !education) {
          res.json({ status: 'failure', message: 'Invalid Id' })
        }
        else {
          res.json({ status: 'success', education: education })
        }
      })
    }
  })

  router.put('/education', function (req, res) {
    if (!req.body._id) {
      res.json({ status: 'failure', message: 'No id provided' })
    }
    else {
      EducationDetails.findOne({ _id: req.body._id }, function (err, education) {
        if (err) {
          res.json({ status: 'failure', message: 'No id provided' })
        }
        else {
          education.college = req.body.college
          education.yearPassedOn = req.body.yearPassedOn
          education.graduated = req.body.graduated
          education.school = req.body.school
          education.yearsAttended = req.body.yearsAttended
          education.skills = req.body.skills
          education.certification = req.body.certification

          education.save(function (err) {
            if (err) {
              res.json({ status: 'failure', message: err })
            }
            else {
              res.json({ status: 'success', message: 'Education Detail updated' })
            }
          })
        }
      })
    }
  })

  router.delete('/education/:id', function (req, res) {
    if (!req.params.id) {
      res.json({ status: 'failure', message: 'No id provided' })
    }
    else {
      EducationDetails.findOne({ _id: req.params.id }, function (err, education) {
        if (err || !education) {
          res.json({ status: 'failure', message: err })
        }
        else {
          education.remove(function (err) {
            if (err) {
              res.json({ status: 'failure', message: err })
            }
            else {
              res.json({ status: 'success', message: 'Education Details Deleted' })
            }
          })
        }
      })
    }
  })
}