const dbConnect=require('./dbConnnection');

const deleteData=async()=>{

const db=await dbConnect();
const data=await db.deleteOne({name:'javed'});
console.log(data);

}
deleteData();