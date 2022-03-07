//Require needed modules
const express = require('express')
const res = require('express/lib/response')

//initialize the app object
const app = express()

//Create a homepage route
app.get('/', function (req, res){
    // This gets sent to the client
    res.send('Hello world!')
})

//Create a second route
app.get('/second', function (req, res){
    // This gets sent to the client
    res.send('Hello 2nd Universe!')
})

//Listen for connections
//app.listen(3000)

//Aternative listen
app.listen(3000, function() {
    console.log('I am awake')
})