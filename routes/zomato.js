//imports
const express=require('express')
const Router=express.Router()
const restaurantcontroller= require('../controllers/restaurant')
const locationController= require('../controllers/location')


//configure all routes
Router.get('/restaurants',restaurantcontroller.getAllRestaurants)
Router.get('/restaurants/:city',restaurantcontroller.getAllRestaurantsBycity)
Router.post('/restaurants/filter/:pageNo',restaurantcontroller.getAllRestaurantsByFilter)

//location route
Router.get('/locations',locationController.getAllLocations)

module.exports=Router