const express = require('express')
const app = express()
const cors  = require('cors')


app.use(cors)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public'));

    app.get(/.*/,(req,res)=>{
        res.sendFile(__dirname + /public/index.html)
    });
}
module.exports = app;