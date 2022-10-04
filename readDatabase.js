const dbConnect=require('./dbConnnection');

const search=async ()=>{
    let db=await dbConnect();
     data=await db.find().toArray();
    console.log(data);
}

search();