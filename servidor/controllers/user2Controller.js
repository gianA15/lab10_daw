// Ruta para obtener todos los usuarios
const User = require("../models/User");

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al obtener los usuarios");
    });
};

// Ruta para crear un nuevo usuario
const createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al crear el usuario");
    });
};

// Ruta para actualizar un usuario existente
const updateUser = (req, res) => {
  const userId = req.params.id;
  User.findByIdAndUpdate(userId, req.body, { new: true })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al actualizar el usuario");
    });
};

// Ruta para eliminar un usuario
const deleteUser = (req, res) => {
  const userId = req.params.id;
  User.findByIdAndRemove(userId)
    .then(() => {
      res.send("Usuario eliminado correctamente");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al eliminar el usuario");
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
