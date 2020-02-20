//Here is where we declare the modules and shit we will need
const express = require('express')

//import the controllers and middleware
const { companiesController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

//get all users
router.get('/', catchErrors(companiesController.index))

//make a new boy
router.post('/', catchErrors(companiesController.store))

//see one boy
router.get('/:id', catchErrors(companiesController.show))

//get rid of a boy
router.delete('/:id', catchErrors(companiesController.delete))

//update a boy
router.put('/:id', catchErrors(companiesController.update))

module.exports = router