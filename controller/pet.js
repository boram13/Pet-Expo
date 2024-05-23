const { query } = require('express');
const petService = require('../service/pet');

exports.createPet = async (req, res, next) => {
  try {
    const { photo, name, origin, type } = req.body;

    if (!photo || !name || !origin || !type) {
      return res.status(400).json({ error: 'Photo, name, and origin are required' });
    }

    const pet = await petService.createPet(photo, name, origin, type);
    res.status(201).json(pet);
  } catch (error) {
    console.log("Error ocurred in creating pet", error)
    res.status(500).json({ error: 'Failed to create pet' });
    next()
  }
}

exports.getAllPets = async (req, res, next) => {

  const { name } = req.query;

  try {
    const result = await petService.getAllPets(name);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pets' });
    next(error);
  }
};

exports.deletePet = async (req, res) => {

  const { id } = req.params;

  try {
    await petService.deletePet(id);
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to delete pet', error });
  }
};

exports.updatePet = async (req, res) => {

  const { name, photo, origin, type } = req.body;
  const { id } = req.params;

  try {
    const updatedPet = await petService.updatePet(id, name, photo, origin, type);
    res.status(200).json({ message: 'Pet is successfully updates', pet: updatedPet });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update', error: error.message });
  }
};

