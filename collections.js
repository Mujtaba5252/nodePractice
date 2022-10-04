const { Double } = require('mongodb');
const mongoose=require('mongoose');

const Schema=new mongoose.Schema(
    {
        name:String,
        semester:String,
        university:String,
    }
);

module.exports= mongoose.model('students',Schema);