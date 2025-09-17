const mongoose=require("mongoose");

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connected to db")
    })
    .catch(()=>{
        console.log("Error in connecting")
    })
}

module.exports=connectToDB