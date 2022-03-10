
//Require needed modules
require('dotenv').config()
const express = require('express')
const res = require('express/lib/response')

//initialize the app object
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

//Create a homepage route
app.get('/', function (req, res){
    // This gets sent to the client
    res.render('home')
})

//404 Route
app.get('*', function(req, res) {
    // This 404 gets sent to the client
    res.status(404).send('<h1>404 Pages</h1>')

})

//Create a second route
app.get('/second', function (req, res){
    // This gets sent to the client
    res.send('Hello 2nd Universe!')
})

//Listen for connections
app.listen(process.env.PORT)
