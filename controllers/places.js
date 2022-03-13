const router = require('express').Router()

//GET /places
router.get('/', (req, res)=> {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'images/shawnanggg-nmpW_WwwVSc-unsplash.jpg'
      }]
    res.render('places/index', {places})
})

module.exports = router

// NEW
router.get('/new', (req, res) => {
  res.render('places/new')
}) 

