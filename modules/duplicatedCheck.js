var csv = require("csvtojson");
const fs = require("fs");

async function duplicatedCheck(users){
    var value=false;
    await csv()
    .fromFile('./users.csv')
    .then((jsonObj)=>{
        console.log(jsonObj);
        for (var i = 0; i < jsonObj.length; i++) {
            
            if (jsonObj[i].user_id == users.user_id) {
                value = true;
                console.log("중복된 아이디가 있음");
                break;
            }
        }
    })
    return value;
    
   
}


module.exports=duplicatedCheck;