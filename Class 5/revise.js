// npm i express

const express=require("express");

const app=express()

// get
// app.get("/",(req,res)=>{
//     res.end("Home Page")
// })
// app.get("/about",(req,res)=>{
//     res.end("About Page")
// })
// app.get("/contact",(req,res)=>{
//     res.end("Contact Page")
// })

// req: params
// app.get("/student/:id",(req,res)=>{
//     res.end(`Student Page ${req.params.id}`)
// })

// req : query
// app.get("/city",(req,res)=>{
//     res.end(`City : ${req.query.loc}`)
// })

// req : params & query

// app.get("/student/:id",(req,res)=>{
//     res.end(`Student id : ${req.params.id} belongs to City : ${req.query.loc}`)
// })
// app.get("/student/:id/city",(req,res)=>{
//     res.end(`Student id : ${req.params.id} belgons to City : ${req.query.loc}`)
// })

// app.use(express.json())
 
// app.post("/student",(req,res)=>{
//     res.end(`Username : ${req.body.user} & Password : ${req.body.pass}`)
// })

app.get("/search",(req,res)=>{
    res.end(`Name : ${req.query.q} and Page : ${req.query.page}`)
})

app.listen("3000",()=>{
    console.log("Listening to port 3000")
})