var express = require('express');
var router = express.Router();
const writeUser = require('../modules/writeUser')
const readUser= require('../modules/readUser')
const duplcatedCheck= require('../modules/duplicatedCheck')

const util = require('../modules/utils');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');

router.post('/', async function(req, res, next) {
    
   
    let duplicated = await duplcatedCheck(req.body)
    console.log(duplicated);
    if(duplicated==true){
        res.status(200).send(util.successTrue(statusCode.OK, resMessage.ALREADY_USER));  
    }else{
        var newUser={
            user_id:" ",
            user_pw:" "
        }
        console.log(req.body.user_id);
        newUser.user_id = req.body.user_id;
        newUser.user_pw = req.body.user_pw;
        writeUser(newUser);
        res.status(200).send(util.successTrue(statusCode.OK, resMessage.CREATED_USER));  
    }
    
   
    
});

module.exports = router;