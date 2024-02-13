const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { personaPost } = require('../controllers/persona.controller');
const { existeEmail } = require('../helpers/db-validators');

const router = Router();

router.post(
    "/",
    [
    check/("nombre", "El nombre no puede estar vacio").not().isEmpty(),
    check("password", "El password debe ser mayor a 6 caracteres").isLength({min:6}),
    check("correo", "Este no es un correo valido").isEmail(),
    check("correo").custom(existeEmail),
    validarCampos,
    ], personaPost)

module.exports = router;