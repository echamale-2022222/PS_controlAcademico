const { Schema, model } = require('mongoose');

const ProfesorSchema = Schema({
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
    cursos: {
        type: [String],
        default: []
    },
    role:{
        type: String,
        default: "TEACHER_ROLE"
    },
    estado:{
        type: String,
        default: true
    }
});

ProfesorSchema.methods.toJSON = function(){
    const{ __v, password, _id, ...profesor} = this.toObject();
    profesor.uid = _id;
    return profesor;
};

module.exports = model('Profesor', ProfesorSchema);