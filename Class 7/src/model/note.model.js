const mongoose=require("mongoose")

// string, number , boolean

const noteSchema=new mongoose.Schema({
    title:String,
    content:String
})

const noteModel= mongoose.model("note",noteSchema);
module.exports=noteModel