var json2csv = require('async-json2csv');
const fs = require('fs');

async function writeFavorite(favoriteItem){
  
    console.log(favoriteItem);
    const options = { 
        data: [favoriteItem],
        fields: ['user_id', 'item_name'],
        header: false
    }
        //console.log(options.data);
        const FavoriteCsv = await json2csv(options);
        await fs.appendFileSync('favoritelist.csv', FavoriteCsv); 
            
    
 }
 
 
 module.exports=writeFavorite;