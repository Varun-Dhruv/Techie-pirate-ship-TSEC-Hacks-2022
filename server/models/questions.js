const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const AnsSchema=require('./answer-option-schema')

const QuestionSchema = new mongoose.Schema({
    question_id:{
        type: Number,
        index: {unique: true}
    },
    question: {
        type: String,
        minlength: 10,
        maxlength: 1000,
      },
      answerText1:{
          type:String
      },
      answerText2:{
        type:String
    }
    ,answerText3:{
        type:String
    }
    ,answerText4:{
        type:String
    }
    ,CorrectAnswer:{
        type: Number,
    }
    ,Points:
    {type:Number,},
    });

    module.exports = mongoose.model('Question', QuestionSchema);

