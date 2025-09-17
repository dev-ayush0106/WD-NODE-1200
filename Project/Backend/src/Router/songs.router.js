const express= require("express")
const multer=require("multer")
const router=express.Router()
const uploadFile=require("../services/songs.service")
const songsModel=require("../models/songs.model")
const cors=require("cors")

const storage=multer({storage:multer.memoryStorage()})

router.use(express.json())
router.use(cors())

router.post("/songs",storage.single("audioFile"),async(req,res)=>{
    // let file=req.body
    console.log(req.body)
    console.log(req.file)

    let fileData=await uploadFile(req.file)
    console.log(fileData)


    let songs=songsModel.create({
        title:req.body.title,
        artist:req.body.artist,
        audioFile:fileData.url,
        mood:req.body.mood
    })

    res.status(201).json({
        message:"Song created Successfully",
        song:songs
    })
})

router.get("/songs",async(req,res)=>{
    let data= await songsModel.find()
    res.json(data)
})

module.exports=router