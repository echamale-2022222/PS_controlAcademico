const Persona = require('../models/persona');

const existeEmail = async (correo = '') => {
    const existenteEmail = await Persona.findOne({correo});
    if (existenteEmail) {
        throw new Error(`El correo ${ correo } ya esta registrado`);
    }
}

module.exports = {
    existeEmail
}