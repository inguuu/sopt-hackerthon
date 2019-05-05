var express = require('express');
var router = express.Router();
const bucket = 'https://s3.ap-northeast-2.amazonaws.com/sopkathon-8'
const statusCode = require('../../modules/statusCode');
const resMessage = require('../../modules/responseMessage');
const util = require('../../modules/utils');
const csv = require('csvtojson');

const readCsv = (fileName)=>{
    return new Promise((resolve, reject)=>{
        csv().fromFile(fileName).then((jsonObj)=>{
          console.log(jsonObj);
            if(jsonObj != null){
                resolve(jsonObj)
            }else{
                reject(resMessage.READ_FAIL);
            }
        })
    })
}

/* GET home page. */
router.get('/', async(req,res)=>{
  readCsv('toyList.csv').then(obj=>{
    let array = new Array();
    for(let i=0; i<obj.length;i++){
      path = bucket+'/'+obj[i].category+'/'+obj[i].index;
      array.push(path);
    }
  
    res.status(200).send(util.successTrue(statusCode.OK,resMessage.READ_SUCCESS,array));
  })
});

router.get('/:temp_category',(req,res)=>{
  readCsv('toyList.csv').then(obj=>{
    let array = new Array();
    for(let i=0; i<obj.length;i++){
      if(req.params.temp_category == obj[i].category){
        path = bucket+'/'+obj[i].category+'/'+obj[i].index;
        array.push(path);
      }
    }
    res.status(200).send(util.successTrue(statusCode.OK,resMessage.READ_SUCCESS,array));
  })
});

module.exports = router;

