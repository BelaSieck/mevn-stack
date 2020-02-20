//import mongoose, our ODM for mongoDB
const mongoose = require('mongoose')

//Define all of its fields, like columns of a SQL table
/* const definition = {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
 email: {
    type: String,
    required: true,
    index: {
      unique: true,
      sparse: true
    }
 }
} */

const definition = {
    name: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
}

//Set any options for the schema
const options = {
  timestamps: false,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
}

//make the schema as a new instance of a mongoose schema, using our definition and options
const companySchema = new mongoose.Schema(definition, options)

companySchema.virtual('adress').get(function() {
    return `${this.street}, ${this.zip}, ${this.city}`
})

//export that boye
module.exports = mongoose.model('Company', companySchema)
