const { Router } = require('express');
const { check } = require('express-validator');

const { cursoPost } = require('../controllers/curso.controller');

const router = Router();

router.post(
    "/",
    [
        check("nombreCurso", "El nombre del curso ").not().isEmpty(),
        check("descripcionCurso", "La descripcion del curso no puede estar vacia").not().isEmpty(),
        check("maestro", "El nombre del maestro no puede estar vacio").not().isEmpty(),
    ], cursoPost);

module.exports = router;