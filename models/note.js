const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({

  content: {
    type: String,
    minlength: 5,
    required: true
  },
  date: { 
    type: Date,
    required: true
  },
  important: Boolean
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})//esto es para borrar campos en el schema, pero no es del todo necesario, ps borramos la versión de cada objeto de traemos.


module.exports = mongoose.model('Note', noteSchema)