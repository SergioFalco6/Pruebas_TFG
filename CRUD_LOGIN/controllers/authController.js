/* MÉTODOS Y PROCEDIMIETNOS PARA CONTROLAR TODA LA LÓGICA DEL REGISTRO, LOGIN Y AUTENTICACIÓN */
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs') // para encriptar la clave
const conexion = require('../database/db.js')
const { promisify } = require('util') // se van a utilizar promesas, una comunicación asincrona

// procedimiento para registrarse
exports.registro = async (req, res) => {
    try {
        const name = req.body.name
        const user = req.body.user
        const pass = req.body.pass
        //console.log(name +" - "+ user +" - "+ pass)
        let passHash = await bcryptjs.hash(pass, 8)
        //console.log(passHash)
        conexion.query('INSERT INTO usuarios SET ?', {usuario: user, nombre: name, password: passHash}, (error, results) => {
            if(error){console.log(error)}
            res.redirect('/')
        })
    } catch (error) {
        console.log(error)
    }
}

// procedimiento para login
exports.login = async (req, res) => {
    try {
        const user = req.body.user
        const pass = req.body.pass
        //console.log(user +" - "+ pass)

        if (!user || !pass) {
            res.render('login', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y contraseña",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        }else {
            conexion.query('SELECT * FROM usuarios WHERE usuario = ?', [user], async (error, results) => {
                if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass)) ){
                    res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o Contraseña incorrectas",
                        alertIcon: 'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    })
                }else { // incio de sesión OK
                    const id = results[0].id
                    const token = jwt.sign({id:id}, process.env.JWT_SECRETO, {expiresIn: JWT_TIEMPO_EXPIRA})
                    // generamos token sin feecha de expiración
                    //  const token = jwt.sign({id:id}, process.env.JWT_SECRETO)
                    console.log("TOKEN: "+token+" para el Usuario: "+user)

                    const cookiesOptions = {
                        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    res.cookie('jwt', token, cookiesOptions)
                    res.render('login', {
                        alert: true,
                        alertTitle: "Conexión exitosa",
                        alertMessage: "¡LOGIN CORRECTO!",
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: ''
                    })
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}

// procedimiento para autenticación
exports.isAuthenticated = async (req, res, next) => {
    if (req.cookie.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookie.jwt, process.env.JWT_SECRETO)
            conexion.query('SELECT * FROM usuarios WHERE id = ?', [decodificada.id], (error, results) => {
                if (!results) {return next()}
                req.user = results[0]
                return next()
            })
        } catch (error) {
            console.log(error)
            return next()
        }
    }else {
        res.redirect('/login')
    }
}

// procedimiento de cerrar sesión
exports.logout = (req, res) => {
    res.clearCookie('jwt')
    res.redirect('/')
}