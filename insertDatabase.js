const dbConnect=require('./dbConnnection');

const insert=async ()=>{
    let db=await dbConnect();
    const data=await db.insertMany(
      [  
        {name:'javed',semester:6,university:'KUST'},
        {name:'Zain',semester:7,university:'Air'},
        {name:'Raazia',semester:8,university:'MAJU'},
      ]
 );
     if(data.acknowledged)
    {
     console.log("Inserted Succesfully");
    }
}
insert();