var express = require('express');
var router = express.Router();

let AWS = require("aws-sdk");

AWS.config.loadFromPath(__dirname + "/../config/awsconfig.json");
let s3 = new AWS.S3();


/* GET home page. */

router.use('/main',require('./main/index'));
router.use('/signin',require('./singin'));
router.use('/favorite',require('./favorite/index'));
router.use('/signup',require('./signup'));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
