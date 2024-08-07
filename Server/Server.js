const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

app.use('/',routes)

app.get('/ping',(req,res) => {
    res.send('Node app is running clearly')
})

app.listen(3000,() =>{
    console.log('Node API app is running on port 3000')
})