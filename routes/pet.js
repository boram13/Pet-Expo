const express = require('express');
const petController = require('../controller/pet');
const isAuth = require('../middleware/is-auth');
const { query, body, param } = require('express-validator');

const router = express.Router();

router.post('', isAuth, petController.createPet);

router.get('', isAuth, petController.getAllPets);

router.put('/:id', isAuth, petController.updatePet);

router.delete('/:id', isAuth, petController.deletePet);

module.exports = router;