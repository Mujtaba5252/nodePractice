const data=require('./ApiData')

let a=10;
let b=20;

let waitingData=new Promise((resolve,reject)=>{

setTimeout(()=>
{

 resolve(30);
},2000)


})
waitingData.then((item)=>{
    console.log(a+item);
})
