const express = require("express")

const app = express()

// GET METHOD =>
    app.get('/',(req, res)=>{
        res.send("HOME PAGE")
    })
    app.get('/about',(req, res)=>{
        res.send("ABOUT PAGE")
    })
    app.get('/contact',(req, res)=>{
        res.send("CONTACT PAGE")
    })
    app.get('/data',(req, res)=>{
        res.send("DATA PAGE")
    })
    app.get('/',(req, res)=>{
        res.send("HOME PAGE")
    })

app.listen(8080, ()=>{
    console.log("Running is server port on 8080");
})