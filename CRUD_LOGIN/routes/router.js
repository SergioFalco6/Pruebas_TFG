const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController.js')

// router para las vistas
router.get('/', authController.isAuthenticated, (req, res) => {
    res.render('index', {user: req.user})
})

router.get('/login', (req, res) => {
    res.render('login', {alert: false})
})

router.get('/registro', (req, res) => {
    res.render('registro')
})

// router para los métodos del controller
router.post('/registro', authController.registro)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router
