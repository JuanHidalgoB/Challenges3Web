const express = require('express')
const { dbConnection } = require('./database/config.js')
require('dotenv').config()
const cors = require('cors')


const app = express()

//base de datos
dbConnection()

const headers = {
    origin: '*',
    METHOD: ["GET", "POST"]
}
app.use(cors(headers))

app.use(express.json())
app.use(express.static('public'))

//rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/task', require('./routes/task'))

app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto', process.env.PORT)
})

