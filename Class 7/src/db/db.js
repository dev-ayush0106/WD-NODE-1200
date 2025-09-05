const mongoose=require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://backendConnect:Backend@cluster0.8svjs.mongodb.net/Connectivity")
    .then(()=>{
        console.log("Connected to DB")
    })
}

module.exports=connectToDb