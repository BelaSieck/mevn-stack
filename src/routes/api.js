/*
 * This file is used to build the API routes, we may have 
 * different routes for views and the like
 */

const express = require('express')

const userRoutes = require('./users') //use the user route shit

const companyRoutes = require('./companies')

const router = express.Router() //make a new router

router.use('/users', userRoutes) //tell it to use the userRoutes

router.use('/companies', companyRoutes)

module.exports = router