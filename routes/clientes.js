const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')

router.get('/', clienteController.mostrar)

module.exports = router
