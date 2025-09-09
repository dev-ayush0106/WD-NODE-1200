const express=require("express")
const app=express()

const connectToDb=require("./src/db/db")
const noteModel=require("./src/model/notes.model")
app.use(express.json())
// mongodb atlas(cloud) mongodb compass (application)
// mongodb+srv://<db_username>:<db_password>@cluster0.8svjs.mongodb.net/
connectToDb()

app.get("/notes",async(req,res)=>{
    let notes=await noteModel.find()
    res.json(notes)
})

// Data Store : POST

app.post("/notes",async(req,res)=>{
    const {title,content}=req.body
    await noteModel.create({
        title,content
    })

    res.json({
        message:"Note Created Successfully"
    })
})

// Delete Note : delete

app.delete("/notes/:id",async(req,res)=>{
    const id=req.params.id

    await noteModel.findOneAndDelete({
        _id:id
    })

    res.json({
        message:"Note Deleted"
    })
})

// UPDATE THE DATA : PATCH
app.patch("/notes/:id",async(req,res)=>{
    let id=req.params.id
    let {content}=req.body
    await noteModel.findOneAndUpdate({
        _id:id
    },{
        content:content
    })
    res.json({
        message:"Note Updated"
    })
})

app.listen(3000,()=>{
    console.log("Listening to 3000")
})