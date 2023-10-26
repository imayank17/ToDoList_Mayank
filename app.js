const express = require('express')
const mongoose = require('mongoose')
const url ='mongodb://localhost/programmerDBex'
const app = express()
mongoose.coonect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('connected...')
})