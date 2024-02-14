const Persona = require('../models/persona');
const Role = require('../models/role');

const existeEmail = async (correo = '') => {
    const existenteEmail = await Persona.findOne({correo});
    if (existenteEmail) {
        throw new Error(`El correo ${ correo } ya esta registrado`);
    }
}

const esRoleValido = async (role = '') => {
    const existeRol = await Role.findOne({role});
    if (!existeRol) {
        throw new Error(`El role: ${role} no existe en la base de datos`)
    }
}

module.exports = {
    existeEmail,
    esRoleValido
}