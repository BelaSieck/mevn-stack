//import the Company constant explicitly
const { Company } = require('../database/models')
const trunks = require('trunks-log')
const log = new trunks('COMPANY')

//show all companies
exports.index = async (req, res) => {
  
  //query the DB of all companies
  await Company.find().exec()
  .then(companies => {
    log.success('Retrieved all {} companies', companies.length)
    res.json({ companies: companies})
  })
  .catch(err => {
    log.error(err, 'Could not retrieve companies: {}', err.message)
    res.json({ error: err, message: "Could not retrieve companies"}).status(500)
  })
}

//Store a new company
exports.store = async (req, res) => {
  
  let company = new Company(req.body)

  //save it in the DB
  await company.save()
    .then(company => {
      log.success('Created Company: {}', company.name)
      //send a 201 and the new resource
      res.status(201).json({ data: company })
    })
    .catch(err => {
      log.error(err, 'Error creating company: {}', company.name)
      let errStatus = err.name === 'ValidationError' ? 400 : 500
      res.status(errStatus).json({err: err})
    })
}

//this function is for looking at one company by their mongo id
exports.show = async (req, res) => {

  //find this sneaky boye
  await Company.findById(req.params.id).exec()
  .then(company => {
    log.success('Found company: {}', company.name)
    res.json({ company: company})
  })
  .catch(err => {
    log.error(err, 'Error finding company: {}', req.params.id)
    res.json({ error: err, message: 'Could not retrieve company'}).status(500)
  })
}

//ever wanted to make the company disappear 
exports.delete = async (req, res) => {

  //find the sneaky boye and make him go away
  await Company.findByIdAndRemove(req.params.id).exec()
  .then(() => {
    log.success('Deleted Company: {}', req.params.id)
    //let em know there aint no content no mo
    res.status(204).json()
  })
  .catch(err => {
    log.error(err, 'Error finding user: {}', req.params.id)
    res.status(500).json({err: err})
  })

}

//edit a company based on ID
exports.update = async (req, res) => {
  await Company
  .findByIdAndUpdate(req.params.id, req.body, { new: true })
  .exec()
    .then(company => {
      log.success('Updated company: {}', req.params.id)
      res.status(200).json({company: company})
    })
    .catch(err => {
      log.error(err, "Could not update user: {}", req.params.id)
      res.status(500).json({err: err})
    })
}
