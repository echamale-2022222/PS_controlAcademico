const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { profesorPost } = require('../controllers/profesor.controller');
const { existeEmail, existeEmailProfesor } = require('../helpers/db-validators');

const router = Router();

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("password", "La contraseña debe tener como minimo 6 caracteres").isLength({min:6}),
        check("correo", "El correo no es un correo valido").isEmail(),
        check("correo").custom(existeEmailProfesor),
        validarCampos,
    ], profesorPost);

module.exports = router;