const { request, response } = require("express");
const Estudiante = require("../models/estudiante");
const Profesor = require("../models/profesor");
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/generar-jwt");


const login = async (req = request, res = response) => {
    const { correo, password } = req.body;

    try{

        let usuario = await Profesor.findOne({correo});

        if (!usuario) {
            usuario = await Estudiante.findOne({ correo });
            if (!usuario) {
                return res.status(400).json({
                    msg: "Credenciales incorrectas, correo no existe en la base de datos."
                });
            }
        }
      
        if(!usuario.estado){
            return res.status(400).json({
                msg: "El Usuario no existe en la Base de datos"
            });
        }

        const validarPassword = bcryptjs.compareSync(password, usuario.password);
            if(!validarPassword){
                return res.status(400).json({
                msg: "La contraseña es incorrecta"
            });
        }


        const token = await generarJWT(usuario.id);

        res.status(200).json({
            msg: "Bienvenido",
            usuario,
            token
        });

    } catch (e) {
        res.status(500).json({
            msg: "Comuniquese con el dueño"
        });
    };
}

module.exports = {
    login
}