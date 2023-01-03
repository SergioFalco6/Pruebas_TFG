// SERVIDOR
const express = require('express')
const dotnev = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

// seteamos el motor de plantillas
app.set('view engine', 'ejs')

// seteamos la carpeta public para archivos estáticos
app.use(express.static('public'))

// para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// seteamos las variables de entorno
dotnev.config({path: './env/.env'})

// para trabajar con las cookies
app.use(cookieParser())

// llamar al router
app.use('/', require('./routes/router'))

const PORT = 3001
app.listen(PORT, () => {
    console.log('SERVER UP running on port', PORT)
})