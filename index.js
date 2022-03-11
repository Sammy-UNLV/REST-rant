
//Require needed modules
require('dotenv').config()
const express = require('express')
const res = require('express/lib/response')

//initialize the app object
const app = express()

// Express Settings
//app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controller & Routers
app.use('/places', require('./controllers/places'))

//Create a homepage route
app.get('/', function (req, res){
    // This gets sent to the client
    res.render('home')
})

//404 Route
app.get('*', function(req, res) {
    // This 404 gets sent to the client
    res.render('error404')

})

//Listen for connections
app.listen(process.env.PORT)
