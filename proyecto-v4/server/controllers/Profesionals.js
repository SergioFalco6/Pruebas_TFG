import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Importamos el Modelo
import Profesionals from "../models/ProfesionalModel.js";
import Patients from "../models/PatientModel.js";

/* Métodos para el Profesional */

// Mostrar los datos (id, nombre y email) de un profesional en específico
export const getProfesional = async(req, res) => {
    try {
        const profesional = await Profesionals.findAll({
            attributes:['id', 'name', 'email'],
            where: { id: req.params.id }
        });
        res.json(profesional[0]);
    } catch (error) {
        console.log(error);
    }
}

// Mostrar los datos (id, nombre, usuario y email) de los profesionales
export const getAllProfesionals = async(req, res) => {
    try {
        const profesionals = await Profesionals.findAll({
            attributes:['id', 'nombre', 'email'],
        });
        res.json(profesionals);
    } catch (error) {
        console.log({message: error.message});
    }
}

// Mostrar los pacientes del profesional
export const getPatients = async(req, res) => {
    try {
        const patients = await Patients.findAll({
            attributes: ['id', 'nombre', 'genero', 'fecha_nacimiento', 'numero_contacto', 'email', 'profesional', 'observaciones'],
            where: { profesional: req.params.id }
        });
        res.json(patients);
    } catch (error) {
        console.log(error);
    }
}

// Mostrar los datos (id, nombre y email) de un profesional en específico
export const getPatientById = async(req, res) => {
    try {
        const patient = await Patients.findAll({
            attributes: ['id', 'nombre', 'genero', 'fecha_nacimiento', 'numero_contacto', 'email', 'profesional', 'observaciones'],
            where: { id: req.params.id }
        });
        res.json(patient[0]);
    } catch (error) {
        console.log(error);
    }
}

// // Mostrar los pacientes (id, nombre, usuario y email) del profesional específico
// export const getPacientes = async(req, res) => {
//     //const idProfesional = Number(req.params.id);
//     //console.log("El id del profesional es: " + idProfesional)
//     try {
//         const pacientes = await Pacientes.findAll({
//             attributes: ['id', 'nombre', 'email', 'profesional', 'observaciones'],
//             //where: {profesional: idProfesional}
//         });
//         res.json(pacientes);
//     } catch (error) {
//         console.log(error);
//     }
// }

// Añadir un nuevo paciente
export const newPatient = async(req, res) => {
    const { name, genero, fechaNacimiento, email, numeroContacto, password, confPassword, profesional, observaciones } = req.body;
    //if(password !== confPassword) return res.status(400).json({msg: "Las contraseñas NO coinciden!"});
    //const salt = await bcrypt.genSalt();
    //const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Patients.create({
            nombre: name,
            genero: genero,
            fehca_nacimiento: fechaNacimiento,
            email: email,
            numero_contacto: numeroContacto,
            password: password,
            profesional: profesional,
            observaciones: observaciones
        });
        res.json({msg: "Registrado con éxito!"});
    } catch (error) {
        console.log(error);
    }
}

// Realizar un nuevo registro de un usuario
export const Register = async(req, res) => {
    const { nombre, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Las contraseñas NO coinciden!"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Profesionals.create({
            nombre: nombre,
            email: email,
            password: hashPassword
        });
        res.json({msg: "Registrado con éxito!"});
    } catch (error) {
        console.log(error);
    }
}

// Acceder a la página de inicio
export const Login = async(req, res) => {
    try {
        const profesional = await Profesionals.findAll({
            where:{
                email: req.body.email,
                //userName: req.body.userName
            }
        });
        const match = await bcrypt.compare(req.body.password, profesional[0].password);
        if(!match) return res.status(400).json({msg: "Contraseña incorrecta"});
        const userId = profesional[0].id;
        const name = profesional[0].nombre;
        const email = profesional[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Profesionals.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email no registrado"});
    }
}

// Salir al Login
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const profesional = await Profesionals.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!profesional[0]) return res.sendStatus(204);
    const userId = profesional[0].id;
    await Profesionals.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}