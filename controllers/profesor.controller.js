const bcryptjs = require('bcryptjs');
const Profesor = require('../models/profesor');

const profesorPost = async (req, res) => {
    const { nombre, correo, password} = req.body;
    const profesor = new Profesor({nombre, correo, password});

    const salt = bcryptjs.genSaltSync();
    profesor.password = bcryptjs.hashSync(password, salt);

    await profesor.save();

    res.status(202).json({
        msg: "Profesor registrado correctamente",
        profesor
    })
}

module.exports = {
    profesorPost
}