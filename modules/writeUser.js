
var json2csv = require('async-json2csv');
const fs = require('fs');

async function writeUser(userInfo){
  
    console.log(userInfo);
    const options = { 
        data: [userInfo],
        fields: ['user_id', 'user_pw'],
        header: false
    }
        //console.log(options.data);
        const UsersCsv = await json2csv(options);
        await fs.appendFileSync('users.csv', UsersCsv);     
    
 }
 
 
 module.exports=writeUser;