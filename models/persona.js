const { Schema, model } = require('mongoose');

const PersonaSchema = Schema({
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
        enum: ["TEACHER_ROLE", "STUDENT_ROLE"]
    },
    estado:{
        type: String,
        default: true
    }
});

module.exports = model('Persona', PersonaSchema);