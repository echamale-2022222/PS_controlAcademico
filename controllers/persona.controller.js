const bcryptjs = require('bcryptjs');
const Persona = require('../models/persona');

const personaPost = async (req, res) => {
    const { nombre, correo, password} = req.body;
    const persona = new Persona({nombre, correo, password});

    const salt = bcryptjs.genSaltSync();
    persona.password = bcryptjs.hashSync(password, salt);

    await persona.save();

    res.status(202).json({
        msg: 'Persona registrada',
        persona
    })
}

module.exports = {
    personaPost
}