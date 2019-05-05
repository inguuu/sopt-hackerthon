var csv = require("csvtojson");
const fs = require("fs");


async function readFavorite(){
   var Favorites =[];
    await csv()
    .fromFile('favoritelist.csv')
    .then((jsonObj)=>{
        for (var i = 0; i < jsonObj.length; i++) {
          Favorites.push(jsonObj[i]);
        }
    })
    console.log(Favorites);
    return Favorites;
    
    
                
}


module.exports=readFavorite;