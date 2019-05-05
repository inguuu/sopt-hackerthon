var csv = require("csvtojson");
const fs = require("fs");


async function readUser(){
   var Users =[];
    await csv()
    .fromFile('./users.csv')
    .then((jsonObj)=>{
        for (var i = 0; i < jsonObj.length; i++) {
          Users.push(jsonObj[i]);
        }
    })
    return Users;
    
                
}


module.exports=readUser;