const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()
const recordModel = require("../model/records.model")
const cookie=require("cookie-parser")

router.use(express.json())
router.use(cookie())
router.get("/user", async (req, res) => {
    const { token } = req.cookies

    // if(!token){
    //     res.status(400).json({
    //         "message":"Unauthorised"
    //     })
    // }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await recordModel.find({
            _id: decoded.id
        }).select("-password -__v")

        res.status(200).json({
            "message": "Data Fetched",
            user
        })
    }
    catch (err) {
        res.status(400).json({
            "message": "Unauthorised [Invalid Token]"
        })
    }
})

router.post("/register", async (req, res) => {
    const { username, password } = req.body

    const user = await recordModel.create({
        username, password
    })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY)
    res.cookie("token",token);
    res.status(200).json({
        message: "Data Created",
        user,
    })
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body

    const user = await recordModel.findOne({
        username: username
    })

    if (!user) {
        res.status(400).json({
            "message": "Invalid User [username not found]"
        })
    }

    const isPassword = password == user.password

    if (!isPassword) {
        res.status(400).json({
            message: "Invalid Password [re-ener the correct password]"
        })
    }
    else {
        res.status(200).json({
            message: "User Found",
            user
        })
    }
})

router.get("/logout", (req, res) => {

})

module.exports = router
