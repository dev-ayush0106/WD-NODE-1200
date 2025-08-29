const express=require("express");

const app = express() // server create 

app.get("/",(req,res)=>{
    res.end("This is Home Page")
})
app.get("/admin",(req,res)=>{
    res.end("This is Admin Page")
})

app.get("/user/:id",((req,res)=>{
    res.end(`User : ${req.params.id}`)
}))

app.get("/city",(req,res)=>{
    res.end(`City : ${req.query.loc}`)
})

app.get("/user/:id/city",(req,res)=>{
    res.end(`User: ${req.params.id} City : ${req.query.q}`)
})

app.listen(3000,()=>{ // ek port pa sunwayii 
    console.log("Listening to port 3000");
})


