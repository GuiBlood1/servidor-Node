const express = require('express')
const servidor = express()

servidor.set('view engine','ejs')

servidor.get('/',(req,res)=>{
    res.render('index.ejs')
})

servidor.get('/register',(req,res)=>{
    setTimeout(function(){
        res.render('register.ejs')
    },350)
})

servidor.listen(3000)