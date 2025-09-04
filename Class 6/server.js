const express = require("express")

const app = express();

let notes = []

app.use(express.json())

app.get("/notes", (req, res) => {
    res.json(notes);
})

app.post("/notes", (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    res.send("Notes Added Successfully!")
})

app.delete("/notes/:index", (req, res) => {
    const idx = req.params.index
    delete notes[idx]
    res.send(`Note Deleted At index ${idx}`)
})

app.patch("/notes/:index", (req, res) => {
    const idx = req.params.index
    const { Content } = req.body
    console.log(Content)

    notes[idx].Content=Content
    res.send("Note Updated")
})

app.listen(3000, () => {
    console.log("Listening to 3000 port")
})


// notes
// GET < POST < PATCH < DELETE