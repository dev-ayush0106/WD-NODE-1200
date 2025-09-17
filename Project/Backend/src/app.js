const express=require("express")
const songsRoute=require("./Router/songs.router")
const app=express();
app.use(express.json())

app.use("/",songsRoute)

module.exports=app;