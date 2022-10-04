const express=require('express');

require('./MongoseConnection');
const collection=require('./collections');
const app=express();
app.use(express.json());

app.post('/',async (req,resp)=>{

    let data= new collection(req.body);
    let result=await data.save();
    console.log(result);
    resp.send(result);
});


app.use(express.json());
app.get('/search/:key',async(req,resp)=>{   /// search api with mongose
    let data=await collection.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"semester":{$regex:req.params.key}},
                {"university":{$regex:req.params.key}},
                
            ]
        }
    )
    resp.send(data);

});
app.listen(4000);