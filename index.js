const app = require('./app') // la aplicación Express real
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

/*require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const Note = require('./models/note') // importo el obj de base de datos.
app.use(express.json()) //usamos el use para usar los middleware, y deben de ser en orden--> y estos se ejecutan antes de cada solictud ->funciones que se ejecutan antes o despues de una petición

app.use(cors());
app.use(express.static('build'));

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger);
// cuando creo un middleware uso siempre el next() para pase con el siempre middleware delante de este o simplemente vaya a la ruta que se solicito. Si quito este next(), no va a la ruta que el usuario esta pidiendo porque se queda en este middleware, tampoco haria uso de los otros middleware de adelante. 
//incluso si coloco un next dentro de una ruta, este pasara al middleware de unknownEndpoint, ya que next(), permite que el flujo siga, no se estanca o para en la ruta o en los middleware.
//ahora bien, si usamos next(argumento), express lo interprerara siempre como que ha ocurrido un error y este llamara a los middleware encargados de eso, ya sea los genericos o los que hemos creado nosotros mismo, o sea para los otros middleware y llama al que manjera el error. El argumento de next(argumento), puede ser un error o no, pero express siempre lo interpreara como un error cuando le pase argumentos. O sea se salta los otros middleware intermedios y pasa directo al que esta encargado del error.
//Para crear middleware de manejador de errorres uso 4 argumentos, (error, request, response, next), -->en este caso express sabra que es un middleware de manjeador de errores, y se usa la función next de nuevo.--> el argumento de "error" en la fución de manejador de errrores en el middleware toma el valor que se le paso como argumento a next(error)-->recibe el mismo objeto.




let notes =[
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]

app.get('/api/notes', (request, response, next) => {
  //response.json(notes)
  Note.find({}).then(notes =>{
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })

    .catch(error => {
      console.log(error)
      //response.status(400).send({ error: 'malformatted id' })
      next(error)

    })
})

/*app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end() //el "end" al final es para no devolver datos
  })*/
  /*app.delete('/api/notes/:id', (request, response, next) => {
    Note.findByIdAndDelete(request.params.id)
      .then(result => {
        response.status(204).end()//el end al final es para terminar una petición porque si no lo coloco se queda cargando y no envia nada. Sin embargo, el send() y json() envian los datos de una y termina ese request o sea no se queda cargando.
      })
      .catch(error => next(error))
  })

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  app.post('/api/notes', (request, response, next) => {
    const body = request.body
  
    if (body.content === undefined) {
      return response.status(400).json({ error: 'content missing' })//ponemos return para que no siga el flujo dentro de esta
    }
  
    const note = new Note({
      content: body.content,
      important: body.important || false,
      date: new Date(),
    })
  
    note.save().then(savedNote => {
      response.json(savedNote.toJSON())
    }).catch(error => next(error));
    console.log('aqui llego')//continua con el flujo dentro de esta función porque atrapa el error, lo soluciona y continua. Incluso si no hay error ps continua aqui.
  })

  app.put('/api/notes/:id', (request, response, next) => {
    const body = request.body
  
    const note = {
      content: body.content,
      important: body.important,
    }
  
    Note.findByIdAndUpdate(request.params.id, note, { new: true })
      .then(updatedNote => {
        response.json(updatedNote)
      })
      .catch(error => next(error))
  })




const errorHandler = (error, request, response, next) => {//esta función de error nunca se usa a no ser que se llame con next(argumento), o sea los next() sin argumentos no llaman a esta, o no sigue el flujo normal 
  console.error(error.message);
  console.log(error.name);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' }) //ponemos return para que no siga con el flujo hacia abajo dentro de esta función.
  } 
  else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })//ponemos return para que no siga con el flujo hacia abajo dentro de esta función.
  }

  next(error)//si no es un error llamaod "CastError", ps pasa el error al controlador de errores Express predeterminado
}

app.use(errorHandler)


//aqui usamos otro middleware y este solo se ejecuta si no entra a niguna de nuestras rutas 
const unknownEndpoint = (request, response) => {
  console.log('test')
  response.status(404).send({ error: 'unknown endpoint' })
}
      
app.use(unknownEndpoint)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})*/