const express = require("express")
const path = require("path")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.resolve("..", "dist")))


app.listen(3000,()=>{console.log("server running port 3000")});

const players = [];

app.post("/player", (req, res)=>{
    console.log("req.body" , req.body)
    const username = req.body.username;
    players.push(username);
    res.status(200).send(JSON.stringfy(players))
})

