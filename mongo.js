//este archivo lo puede usar con node mongo.js para testear la BD, pero no esta relacionada con la aplicación.
//sirve para testear como se conecta la BD y ver las peticiones


const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const dataBaseName='note-app'//aqui creo una base de datos dentro del cluster, el cluster tiene configurado mi usuario y contraseña :), el cluster es donde guardo todas mis BD.
const url =
  `mongodb+srv://Oswe:${password}@cluster0.preosk9.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`;

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)// El primer argumento se colocar en singular e indica el nombre de la colección.

const notes = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

/*notes.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})*/

Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
})