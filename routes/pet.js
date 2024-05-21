const express = require('express');
const petController = require('../controller/pet');
const isAuth = require('../middleware/is-auth');
const { query, body, param } = require('express-validator');

const router = express.Router();

router.post('/create', petController.createPet);

router.get('/get', petController.getAllPets);

module.exports = router;