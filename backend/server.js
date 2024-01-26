const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const app = express()
app.use('/api/tareas', require('./routes/tareasRoutes'))
app.listen(port, () => console.log(`Servidor inicializado en el puerto ${port}!`))

//app.get('/api/tareas', (req, res) =>{
  //  res.status(200).json({mensaje:'Get Tareas'})
//})

//app.get('/', (req, res) => res.send('Hello World!'))

