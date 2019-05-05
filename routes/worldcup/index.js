var express = require('express');
var router = express.Router();
var readCsv = require('../../modules/readCsv');
/* GET home page. */
router.post('/', async (req,res)=>{
    readCsv('toyList').then(objData=>{
      let index=-1000;
      let path = "";
      for(let i=0; i<objData.length;i++){
        if(objData[i].name == req.body.item_name){
          inedex =i;
          path 
          break;
        }
      }
      if(i<objData.length){

      }
    })
});

module.exports = router;
