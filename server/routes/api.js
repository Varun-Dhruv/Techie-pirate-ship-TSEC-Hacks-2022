const express = require('express');
const router = express.Router();
const User = require('../models/user_profile');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
const Question = require('../models/questions');

router.use(express.json());

router.get('/ques',function(req,res){
  Question.find({},function(err,docs){
    if(err) throw err;
    res.send(docs);
 });
  console.log("successfully sent questions");
});
router.post('/ques',function(req,res){
  var newQuestion = Question(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
    console.log("Stored in db successfully");
});
});
router.get('/:id',function(req,res){
   res.send('id:'+req.params.id);
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

router.post('/Signup',function(req,res){
    var newUser = User(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
    console.log("Stored in db successfully");
  });
});


module.exports = router;