const dbConnect=require('./dbConnnection');

const update=async()=>{

    const db=await dbConnect();
    const data=await db.updateOne({name:'Zain'},{$set:{university:'LUMS'}});
    if(data.acknowledged)
    {
        console.log(data);
    }


}

update();