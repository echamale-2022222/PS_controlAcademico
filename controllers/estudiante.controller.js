const bcryptjs = require('bcryptjs');
const Estudiante = require('../models/estudiante');

const estudiantePost = async (req, res) => {
    const { nombre, correo, password} = req.body;
    const estudiante = new Estudiante({nombre, correo, password});

    const salt = bcryptjs.genSaltSync();
    estudiante.password = bcryptjs.hashSync(password, salt);

    await estudiante.save();

    res.status(202).json({
        msg: "Estudiante registrado correctamente",
        estudiante
    })
}

module.exports = {
    estudiantePost
}