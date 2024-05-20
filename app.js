const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Pet = require('./models/pet');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://bm200000:bm200000@cluster0.h5tix4x.mongodb.net/')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// routes

app.post('/pets', async (req, res) => {
    try {
        const pet = new Pet(req.body);
        await pet.save();
        res.status(201).send(pet);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get('/pets', async (req, res) => {
    try {
        const pets = await Pet.find();
        res.send(pets);
    } catch (err) {
        res.status(500).send(err);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port  3000`);
});