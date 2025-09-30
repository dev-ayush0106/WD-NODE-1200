require("dotenv").config()
const app=require("./src/app")
const express=require("express")
const connectToDb=require("./src/db/db")
app.use(express.json())

connectToDb()
app.listen(3000,()=>{
    console.log("Listening at port 3000")
})
