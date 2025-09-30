const mongoose=require("mongoose")
const recordSchema=new mongoose.Schema({
    username:String,
    password:String
})

const recordModel=mongoose.model("record",recordSchema)

module.exports=recordModel