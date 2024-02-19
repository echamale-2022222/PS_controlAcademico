const { Router } = require('express');
const { check } = require('express-validator');

const { cursoPost } = require('../controllers/curso.controller');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esTeacherRole, tieneRolAutorizado } = require('../middlewares/validar-roles');

const router = Router();

router.post(
    "/",
    [
        validarJWT,
        esTeacherRole,
        tieneRolAutorizado(),
        check("nombreCurso", "El nombre del curso es obligatorio").not().isEmpty(),
        check("descripcionCurso", "La descripcion del curso no puede estar vacia").not().isEmpty(),
    ], cursoPost);

module.exports = router;