const express = require('express');
const router = express.Router();
const User = require('../models/model');
var bodyParser = require('body-parser');
var passport = require("passport");
var bodyParser = require("body-parser");
const { json } = require('body-parser');


//var urlEncodedParser =bodyParser.urlencoded({extended: true});
router.use(express.urlencoded({ extended: true }));

//var urlEncodedParser = bodyParser.urlencoded({extended: false});
router.get('/',function(req,res){
 res.send('ok');
});
//router.use(bodyParser.urlencoded());
router.post('/login',function(req,res){
  let obj = req.body;
  let found=false;
  User.find({},function(err,docs){
    if(err) throw err;
    for(let i = 0; i < docs.length; i++){
      console.log(docs[i]);
      if(docs[i].name === obj.name && docs[i].password === obj.password){
        found=true;
      }
    }
   res.send(found);
    });
  });


router.use(express.json());

 //router.post('/test',function(req,res){
 // res.send(req.body);
//});

router.post('/Signup',function(req,res){
    var newUser = User(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
    console.log("Stored in db successfully");
  });
});

router.post('/signup',function(req,res){
   console.log(req.body.user,req.body.email,req.body.password);
  //var temp = new User({name:req.body.username,email:req.body.email,password,});
});
module.exports = router;