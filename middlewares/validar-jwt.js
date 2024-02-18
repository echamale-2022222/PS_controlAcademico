const jwt = require('jsonwebtoken');
const Persona = require('../models/persona');
const { request, response } = require('express');

const validarJWT = async(req = request, res = response, next)=> {
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msg: 'No hay token en la petición',
        });
    }

    try{
        //verificación del Token
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        //leer persona al que le corresponde ese uid
        const persona = await Persona.findById(uid);
        //verificar que la persona exista
        if(!persona){
            return res.status(401).json({
                msg: "Persona no existe en la base de datos"
            });
        }

        if(!persona.estado){
            return res.status(401).json({
                msg: "Token no válido, persona con estado false"
            });
        }

        req.persona = persona;
        next();
        
    }catch(e){
        console.log(e);
        res.status(401).json({
            msg: "Token no válido"
        })
    }
} 

module.exports = {
    validarJWT
}