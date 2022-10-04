// const http= require('http');
// const data=require('./ApiData')
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(4600);
const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/practice.txt`;
fs.writeFileSync(filePath,"just for practicec puropose")
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath,"and file name is apple.txt",(err,)=>{
//     if(!err) console.log("file is updated")

// })
// fs.rename(filePath,`${dirPath}/crud.txt`,(err)=>{
//     if(!err) console.log("file is updated")
// })
// fs.unlinkSync(`${dirPath}/crud.txt`)