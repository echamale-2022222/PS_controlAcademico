const { response } = require("express");

const esTeacherRole = (req, res, next) => {
    if(!req.profesor){
        return res.status(500).json({
            msg: "Se desea validar un usuario sin validar token primero"
        });
    }

    const { role, nombre } =  req.profesor;

    if(role !== "TEACHER_ROLE"){
        return res.status(400).json({
            msg: `${nombre} no es un profesor, no puede crear cursos`
        });
    };
    next();
}

const tieneRolAutorizado = (...roles) => {
    return (req =request, res = response, next) =>{
        if(!req.usuario){
            return res.status(500).json({
                msg: "Se desea validar un usuario sin validar token primero"
            });
        }
        
        if(!roles.includes(req.usuario.role)){
            return res.status(400).json({
                msg: `El crear cursos requiere el siguiente rol: ${roles}`
            });
        }
        next();
    }
}


module.exports = {
    esTeacherRole,
    tieneRolAutorizado
}