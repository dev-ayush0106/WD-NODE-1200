const express=require("express")
const app=express()
const router=require("./routes/records.routes")
app.use("/",router)


module.exports=app

