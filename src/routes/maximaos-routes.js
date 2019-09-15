const express = require('express');
const router = express.Router();
const maximaosController = require('../controllers/maximaos-controller');

router.get('/', maximaosController.listMaximaos);
router.post('/', maximaosController.createMaximaos);

module.exports = router;