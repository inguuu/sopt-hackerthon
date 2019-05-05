var express = require('express');
var router = express.Router();

const util = require('../../modules/utils');
const statusCode = require('../../modules/statusCode');
const FavoriteMessage = require('../../modules/favoriteMessage');

const writeFavorite= require('../../modules/wirteFavorite');
const readFavorite= require('../../modules/readFavorite');
const fs = require("fs");

router.post('/', async function(req, res, next) {
  var newFavorite={
    user_id:" ",
    item_name:" "
 }
 console.log(req.body);
  newFavorite.user_id = req.body.user_id;
  newFavorite.item_name = req.body.item_name;
  writeFavorite(newFavorite);
  res.status(200).send(util.successTrue(statusCode.OK, FavoriteMessage.REGISTER_FAVORITE)); 

});

router.delete('/', async function(req, res, next) {

  console.log(req.body.user_id);
 
  let favorites= await readFavorite();
  console.log(favorites[0].user_id);
  for(var i=0; i<favorites.length;i++){
    if(req.body.user_id==favorites[i].user_id&&req.body.item_name==favorites[i].item_name){
      break;  
    }
  }
  if(i<favorites.length){//있을 때
    delete favorites[i];
    res.status(200).send(util.successTrue(statusCode.OK, FavoriteMessage.CANCEL_FAVORITE)); 
  }else{//없을 때 

    res.status(200).send(util.successTrue(statusCode.OK, " 좋아요가 안눌렸는데 DELETE메소드를 보냄"));
  }


});

module.exports = router;
