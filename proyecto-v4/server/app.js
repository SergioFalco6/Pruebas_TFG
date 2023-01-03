import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
// importamos la conexión a la base de datos
import db from "./database/db.js";
// importamos el enrutador
import router from "./routes/router.js";

const app = express();

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));

//seteamos las variables de entorno
dotenv.config({path: './env/.env'})

//para poder trabajar con las cookies
app.use(cookieParser());

//llamar al router
app.use(router);

try {
    await db.authenticate();
    console.log('Conexión exitosa a la DB');
} catch (error) {
    console.error('El error de conexión es: ${error}');
}

app.listen(5000, ()=> {
    console.log('Server UP running in http://localhost:5000/')
});