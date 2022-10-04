const { Int32 } = require('mongodb');
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/profile');

const productSchema=new mongoose.Schema({
    name:String,
    semester:Number,
    university:String,
});
const saveDb=async ()=>{
    const productModel=mongoose.model('students',productSchema);
    let data=new productModel({name:'arif',semester:20,university:'islamia'});
    const result=await data.save();
    console.log(result);
};

const update=async ()=>{
    const productModel=mongoose.model('students',productSchema);
    let data=await productModel.updateOne({name:'arif'},{$set:{university:'Arid University'}})
    console.log(data);

}

const deleteData=async ()=>{
    const productModel=mongoose.model('students',productSchema);
    let data=await productModel.deleteOne({name:'arif'});
    console.log(data);

}

const findData=async ()=>{
    const productModel=mongoose.model('students',productSchema);
    let data=await productModel.find();
    console.log(data);

}

findData();