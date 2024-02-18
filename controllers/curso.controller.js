const Curso = require('../models/curso');

const cursoPost = async (req, res) => {
    const { nombreCurso, descripcionCurso, maestro} = req.body;
    const curso = new Curso({nombreCurso, descripcionCurso, maestro});
    const personaAutenticada = req.persona;
    await curso.save();

    res.status(202).json({
        curso,
        personaAutenticada
    })
}

module.exports = {
    cursoPost
}