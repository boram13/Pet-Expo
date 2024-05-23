const express = require('express');
const birdController = require('../controller/bird');
const isAuth = require('../middleware/is-auth');
const { query, body, param } = require('express-validator');

const router = express.Router();

router.post('', isAuth, birdController.createBirds);

router.get('', isAuth, birdController.getAllBirds);

router.put('/:id', isAuth, birdController.updateBirds);

router.delete('/:id', isAuth, birdController.deleteBirds);

module.exports = router;