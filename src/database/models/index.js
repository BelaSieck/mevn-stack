//bring in the seperate models
const User = require('./user')
//import other models in the same manner
const Company = require('./company')

//export em in a good ol' bundle 
module.exports = {
  User,
  Company
}