const { Schema, model } = require('mongoose');

function limitarCantidadCursos(val) {
    return val.length <= 3;
}

const EstudianteSchema = Schema({
    nombre:{
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    correo:{
        type: String,
        require: [true, 'El correo es obligatorio'],
        unique: true 
    },
    password:{
        type: String,
        require: [true, 'La contraseña es obligatoria']
    },
    role:{
        type: String,
        default: "STUDENT_ROLE"
    },
    cursos:{
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Curso'
        }],
        validate: [limitarCantidadCursos, 'El número de cursos no puede exceder 3']
    },
    estado:{
        type: String,
        default: true
    }
});

EstudianteSchema.methods.toJSON = function(){
    const{ __v, password, _id, ...estudiante} = this.toObject();
    estudiante.uid = _id;
    return estudiante;
};

module.exports = model('Estudiante', EstudianteSchema);