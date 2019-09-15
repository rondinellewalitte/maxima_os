const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const maximaosController = require('../controllers/maximaos-controller');

router.get('/', maximaosController.listMaximaos);
router.post('/', [
    check('nome').isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('motivo').isLength({ min: 10, max: 280 }).withMessage("A menção precisa ter no mínimo 10 caracteres e no máximo 280.")
], maximaosController.createMaximaos);

router.put('/:id', [
    check('nome').optional().isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('motivo').optional().isLength({ min: 10, max: 280 }).withMessage("A visita precisa ter no mínimo 10 caracteres e no máximo 280.")
], maximaosController.updateMaximaos);

router.delete('/:id', maximaosController.deleteMaxiamos);

module.exports = router;