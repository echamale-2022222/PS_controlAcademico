const { Schema, model } = require('mongoose');

const CursoSchema = Schema({
    nombreCurso:{
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    descripcionCurso:{
        type: String,
        require: [true, 'La descripcion es obligatoria']
    },
    maestro:{
        type: String,
        require: [true, 'El nombre del maestro es obligatorio']
    },
    estadoCurso:{
        type: String,
        default: true
    }
});

module.exports = model('Curso', CursoSchema);