const {MongoClient}=require('mongodb');
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);

async function dbConnect()
{
    const result=await client.connect();
    let db=result.db('profile');
    return db.collection('students');
    
}

module.exports=dbConnect;