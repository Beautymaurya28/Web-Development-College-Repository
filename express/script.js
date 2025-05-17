const express = require('express')
const app = express()

app.set("view engine","ejs")
app.use(express.static('./public'))

app.use(function(req,res,next){
    console.log("middleware working")
    next();
})

app.use(function(req,res,next){
    console.log("middleware wroking2")
    next();
})
app.get('/', function (req, res) {
  res.render("index")
})


app.get('/profile', function (req, res) {
    res.send('Hello from profile')
  })

//   app.get("/profile/harsh",function(req,res){
//     res.send("hello from harsh profile")
//   })
  

app.get("/profile/:username",function(req,res){
    res.send(`hello from ${req.params.username} profile.`)
  })

app.listen(3000)