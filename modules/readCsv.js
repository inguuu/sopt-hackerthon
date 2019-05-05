
const csv = require('csvtojson');
const resMessage = require('../modules/responseMessage');

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

module.exports = readCsv;