// dependancies 
// we need to require all of our dependancies
const express = require("express");
const fs = require("fs");
const path = require("path");

// global variables 
// devlaring global variables
const app = express();
const PORT = process.env.PORT || 10000;
const mainDir = path.join(__dirname, "/public");


// middlewear
// access to req.body
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// routes
// html routes here
// need a rotue to server html files so when he those endpoints, the browser will server our html to us
// goal is to display what in the index.html file in the root directory
// fs module, path
// we are defining our home route, which takes in a callback 
app.get("/", (req, res) => {
    res.sendFile(path.join(mainDir, "./public/index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(mainDir, "./public/notes.html"))
});

// googling - middlewear - static files
// starting folder paths @ a designated folder 

app.get("/api/notes",(req, res) => {
    res.sendFile(path.join(mainDir, "db.json"))
});

app.post("/api/notes",(req, res) => {
    let noteCreate = fs.readFileSync(mainDir, "db.json", "utf8")
    let newNote = req.body;
    console.log(newNote);
});


// api routes here 
// end goal is to return data in db.json in response 



// server listener 
app.listen(PORT, () => {
    console.log("You have started up the server");
})


// need to grab
