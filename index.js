const express = require('express');
const app = express();
const pastChamps = require('./pastChamps.json');

app.get('/',(req,res) =>{
    res.send('hello world')
})

app.get('/api/champs',(req,res) =>{
    res.send(pastChamps)
})

app.get('/test',(req,res) =>{
    res.send('Welcome ' + process.env.NAME)
})

app.listen(3000,()=>console.log('listening...'))