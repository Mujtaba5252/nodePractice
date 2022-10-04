const express=require('express');
const dbConnect=require('./dbConnnection');
const mongodb=require('mongodb');
const app=express();

app.use(express.json()); //middleware to get the posted data

app.get('/',async(req,resp)=>{       //get api

    let db=await dbConnect();
    let data= await db.find().toArray();
    resp.send({data});

});



app.post('/',async(req,resp)=>{             //post api

    let db= await dbConnect();
    let data=await db.insertOne(req.body);
    resp.send(data);


})
app.put('/:name',async(req,resp)=>{             //put/update api

    let db= await dbConnect();
    let data=await db.updateMany(
        {name:req.params.name},{$set:req.body}
    );
    resp.send(data);


})
app.delete('/:id',async(req,resp)=>{             //delete api

    let db= await dbConnect();
    let data=await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    resp.send(data);


})
app.listen(4000);