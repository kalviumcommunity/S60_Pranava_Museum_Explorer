
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
        res.json({err})
    }) 
})

app.post('/createUser',(req,res) =>{
    userData.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/login',async(req,res)=>{
    const {email,password} = req.body
    const details = await userData.findOne({Email:email})
    // console.log(details)
    const p = details.Password;
    if (p == password){
        res.send(200);
    }
    else{
        res.send(400);
    }
})

app.put('/put/:id',(req,res)=>{
    res.send('Successfully updated')
})

app.delete('/delete/:id',(req,res) =>{
    res.send('Successful deleted')
})

module.exports = app;
