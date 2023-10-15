const express = require('express')
const app = express()

app.get("/api",(req,res) => {
    res.json({"users":["one","two","three"]})
})

app.listen(5001,() => {console.log("Server started on Port 5001!")})