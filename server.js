const express = require("express");
const fs = require("fs");
const path = require("path");

// Declaring our global variables
const app = express();
const PORT = process.env.PORT || 9000;
const mainDir = path.join(__dirname, "./Develop/public");


// Middlewear
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// HTML Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(mainDir, 'index.html'))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(mainDir, 'notes.html'))
});

// API Routes
app.get("/api/notes",(req, res) => {
    res.sendFile(path.join(mainDir, './Develop/db/db.json'))
});

app.post("/api/notes",(req, res) => {
    let noteCreate = fs.readFileSync(mainDir, './Develop/db/db.json', "utf8")
    let newNote = req.body;
    console.log(newNote);    
    noteCreate.push(newNote)
    fs.writeFileSync('./Develop/db/db.json', noteCreate)
    console.log('posted to db.json')
    res.json(noteCreate)
});

// Server Listener
app.listen(PORT, () => {
    console.log("You have started up the server");
})

