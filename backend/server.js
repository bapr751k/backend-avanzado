const express = require('express')
const connectDB = require('./config/db')
const colors =  require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require ('./middleware/errorMiddleware')
const port = process.env.PORT || 8000
const app = express()
connectDB()
app.use(express.json()) // Middleware para parsear el body de las peticiones
app.use(express.urlencoded({extended: false}))
app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log(`Servidor inicializado en el puerto ${port}!`))

//app.get('/api/tareas', (req, res) =>{
  //  res.status(200).json({mensaje:'Get Tareas'})
//})

//app.get('/', (req, res) => res.send('Hello World!'))

