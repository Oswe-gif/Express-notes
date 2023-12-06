##¿Como correr la API?
*En primer lugar, debe de instalar las dependecias del packaga.json mediante el comando "npm install"
*Package.json:
```
{
  "name": "node-js-ejemplos",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jhoan Ome Vega",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

* Puedes iniciar la API mediante el comando 'node index.js' o 'npm start'. No obstante, se aconseja emplear 'npm run dev', ya que este utiliza nodemon para reiniciar automáticamente el servidor (ver el package.json).
