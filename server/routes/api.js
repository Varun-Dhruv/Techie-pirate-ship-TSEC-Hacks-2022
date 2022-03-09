const express = require('express');
const router = express.Router();
const Todo = require('../model');
var bodyParser = require('body-parser');


// var urlEncodedParser =bodyParser.urlencoded({extended: false});
router.get('/home',function(req,res){
  console.log('hello world');
});

module.exports = router;
