const express=require("express")
const connectToDb=require("./src/db/db")
const noteModel=require("./src/model/note.model")


const app=express()

app.use(express.json())
connectToDb()
app.get("/notes",async(req,res)=>{
    let notes=await noteModel.find()

    res.json(notes)
})

app.post("/notes",(req,res)=>{
    const {title,content}=req.body
    console.log(title,content)

    noteModel.create({title,content})
})

app.listen(3000,()=>{
    console.log("Listening to 3000")
})