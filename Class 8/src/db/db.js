const mongoose=require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://ExpressMongo:express@cluster0.8svjs.mongodb.net/Connect1")
    .then(()=>{
        console.log("Database Connected")
    })
}

module.exports=connectToDb