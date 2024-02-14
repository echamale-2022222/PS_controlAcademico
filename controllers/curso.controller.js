const Curso = require('../models/curso');

const cursoPost = async (req, res) => {
    const { nombreCurso, descripcionCurso, maestro} = req.body;
    const curso = new Curso({nombreCurso, descripcionCurso, maestro});

    await curso.save();

    res.status(202).json({
        curso
    })
}

module.exports = {
    cursoPost
}