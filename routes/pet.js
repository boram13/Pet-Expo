const express = require('express');
const petController = require('../controller/pet');
const isAuth = require('../middleware/is-auth');
const { query, body, param } = require('express-validator');

const router = express.Router();

router.post('', petController.createPet);

router.get('', petController.getAllPets);

router.put('/:id', petController.updatePet);

router.delete('/:id', petController.deletePet);

module.exports = router;