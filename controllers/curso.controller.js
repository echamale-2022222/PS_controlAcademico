const Curso = require('../models/curso');
const Profesor = require('../models/profesor');

const cursoPost = async (req, res) => {
    const { nombreCurso, descripcionCurso} = req.body;
    const curso = new Curso({nombreCurso, descripcionCurso});
    const profesorAutenticado = req.profesor;
    await curso.save();

    const profesor = await Profesor.findById(profesorAutenticado._id);
    profesor.cursos.push(curso.nombreCurso);
    await profesor.save();

    res.status(202).json({
        curso,
        profesorAutenticado
    })
}

module.exports = {
    cursoPost
}