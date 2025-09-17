require("dotenv").config()
const express=require("express")
const app=require("./src/app")
const connectToDB=require("./src/db/db")
const songsModel=require("./src/models/songs.model")



connectToDB()
app.listen(3000,()=>{
    console.log("Listening at port 3000")
})