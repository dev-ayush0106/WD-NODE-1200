// const http =require("http");

// const newServer=http.createServer((req,res)=>{
//     res.end("Hello World\nHii Everyone\nNew Content")
// });

// newServer.listen(9999,()=>{
//     console.log("Server Listening to port 5000")
// })

// const fs=require("fs")

// this was running asynchronous
// fs.readFile("demo.txt","utf-8",(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })


// fs.writeFile("output.txt","HELLO EVERYONE",(err)=>{
//     if(err) throw err
// })

// fs.appendFile("output.txt","\nTHIS IS NEW TEXT 2",(err)=>{
//     if(err) throw err
// })

// fs.appendFile("output1.txt","THIS IS NEW TEXT 2",(err)=>{
//     if(err) throw err
// })

// fs.unlink("demo.txt",(err)=>{
//     if(err) throw err
//     console.log("File Deleted")
// })

// File reading through callback hell

// fs.readFile("data1.txt","utf-8",(err,data)=>{
//     if(err) throw err
//     fs.readFile("data2.txt","utf-8",(err,data1)=>{
//         if(err) throw err
//         fs.writeFile("combined.txt",data+data1,(err)=>{
//             if(err) throw err
//             console.log("Operation Done");
//         })
//     })
// })

const fs=require("fs").promises

fs.readFile("data1.txt","utf-8")
.then(data1=> fs.readFile("data2.txt","utf-8")
.then(data2=>fs.readFile("data3.txt","utf-8")
.then(data3=> fs.writeFile("combined.txt",data1+data2+data3))
)
)
.then(()=>{console.log("Operation Done")})
.catch((err)=>{console.log(err)})