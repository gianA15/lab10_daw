const { Router } = require('express');
const router = Router();
const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');
const { getUsers, createUser, updateUser, deleteUser } = require('./controllers/user2Controller');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/login', require('./routes/usuario'));

app.use('/api', require('./routes/usuario'));
app.use('/api/productos', require('./routes/producto'));



app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})