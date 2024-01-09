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
  important: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})//Cuando un objeto es devuelvo con el esquema de "note", borra  los dos campos ._id y ._v para ser mostrado al usuario y agregar el id con formato de string de manera automatica. Sin embargo, puedo llamar la función toJson() tambien de manual para hacer el proceso -->O sea porque la transformación ocurre cuando llamo al metodo .send() o .json() para enviar los datos al usuario, pero si quiero mostrar algo en consola ps deberia usar el .toJson() para ver como se transformaria porque aun este metodo no se ha aplicado, este metodo se aplica de manera atomcatica apenas se envie los datos con el .SEND() o .JSON(), se resto toca de manera manual.


module.exports = mongoose.model('Note', noteSchema)