//Rutas producto
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/user2Controller');

//api/usuario
router.post('/', userController.crearUsuario);
router.post('/', userController.obtenerUsuario);

/* CRUD USUARIOS */
router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);

module.exports = router;