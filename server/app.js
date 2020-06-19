const express = require('express');
const app = express();
const path = require("path");
const api = require('./api');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');

//Resume Upload
const multer = require('multer');

//use the middleware of bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//Using Multer to Upload file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})

var upload = multer({
    storage: storage
})

//configuring the upload file route
app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(file.filename);
    if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send(file);
})

//configuring mongodb
// const MongoClient = mongodb.MongoClient;
// const url = 'mongodb://localhost:27017';

// MongoClient.connect(url, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }, (err, client) => {
//     if (err) return console.log(err);
//     db = client.db('Files')
//     app.listen(3000, () => {
//         console.log("MongoDB server listening on 3000!")
//     })
// })

app.set('port', (process.env.PORT || 8082));

app.use(bodyParser.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api)
app.use(express.static('static'))
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/JobsApp', { useNewUrlParser: true })
    .then(() => console.log('MobgoDB Connected!!'))
    .catch(err => console.log(err))

var login = require('./api/routes/login')
app.use('/users', login)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('Connected to MongoDB');
    app.listen(app.get('port'), function() {
        console.log('API Server Listening on port ' + app.get('port') + '!');
    });
});

//configuring the home route
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })