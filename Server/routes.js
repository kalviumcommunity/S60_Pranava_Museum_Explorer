
const express = require('express')
const app = express()

const {modelData, userData} = require("./mongodb")

// get api used successfully
app.get('/get',(req,res) =>{
    modelData.find({})
    .then((source) =>{
        // res.send("GET API used successfully")
        res.json({source})
    })
    .catch((err) =>{
        res.status(500).json({err})
    }) 
})

app.post('/createUser',(req,res) =>{
   res.send("Successfully post request done")
})

app.put('/put/:id',(req,res)=>{
    res.send('Successfully updated')
})

app.delete('/delete/:id',(req,res) =>{
    res.send('Successful deleted')
})

module.exports = app;
