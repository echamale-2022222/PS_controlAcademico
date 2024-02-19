const Profesor = require('../models/profesor');
const Estudiante = require('../models/estudiante');
const Curso = require('../models/curso');

const existeEmailProfesor = async (correo = '') => {
    const existenteEmail = await Profesor.findOne({correo});
    if (existenteEmail) {
        throw new Error(`El correo ${ correo } ya esta registrado`);
    }   
}

const existeEmailEstudiante = async (correo = '') => {
    const existenteEmail = await Estudiante.findOne({correo});
    if (existenteEmail) {
        throw new Error(`El correo ${ correo } ya esta registrado`);
    }   
}


module.exports = {
    existeEmailProfesor,
    existeEmailEstudiante
}