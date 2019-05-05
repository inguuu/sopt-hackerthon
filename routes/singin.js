var express = require('express');
var router = express.Router();
const csv = require('csvtojson');
const fs = require("fs");
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
const util = require('../modules/utils');

/* GET home page. */
const readCsv = (fileName)=>{
    return new Promise((resolve, reject)=>{
        csv().fromFile(fileName).then((jsonObj)=>{
            if(jsonObj != null){
                resolve(jsonObj)
            }else{
                reject(resMessage.READ_FAIL);
            }
        })
    })
}

router.get('/', async (req,res)=>{
    
    readCsv('csv/users.csv').then(csvData=>{
        console.log(csvData)
        let id_check =false;
        let pw_check =false;
        for(let i=0; i< csvData.length; i++){
            if(req.body.user_id == csvData[i].user_id ){
                id_check = true;
                if(req.body.user_pw== csvData[i].user_pw) pw_check =true;
            }
        }
        const data= {
            user_id : req.body.user_id,
        }
        if(id_check == true && pw_check== true){
            console.log('hrer2')
            res.status(200).send(util.successTrue(statusCode.OK,resMessage.LOGIN_SUCESS,data));
        }else{

        }
    })
 
});

module.exports = router;
