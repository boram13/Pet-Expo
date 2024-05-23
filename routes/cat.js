const express = require('express');
const catController = require('../controller/cat');
const isAuth = require('../middleware/is-auth');
const { query, body, param } = require('express-validator');

const router = express.Router();

router.post('', isAuth, catController.createCats);

router.get('', isAuth, catController.getAllCats);

router.put('/:id', isAuth, catController.updateCats);

router.delete('/:id', isAuth, catController.deleteCats);

module.exports = router;