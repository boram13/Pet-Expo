const express = require('express');
const dogController = require('../controller/dog');
const isAuth = require('../middleware/is-auth');
const { query, body, param } = require('express-validator');

const router = express.Router();

router.post('', isAuth, dogController.createDogs);

router.get('', isAuth, dogController.getAllDogs);

router.put('/:id', isAuth, dogController.updateDogs);

router.delete('/:id', isAuth, dogController.deleteDogs);

module.exports = router;