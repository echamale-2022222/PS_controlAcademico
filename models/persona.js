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
        default: "STUDENT_ROLE",
        enum: ["TEACHER_ROLE", "STUDENT_ROLE"]
    },
    curso:{
        type: String,
        default: "None",
        asignados: {type: Array, max_items: 3}
    },
    estado:{
        type: String,
        default: true
    }
});

module.exports = model('Persona', PersonaSchema);