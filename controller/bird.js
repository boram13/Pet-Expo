const petService = require('../service/pet');

exports.createBirds = async (req, res, next) => {
  try {
    const { photo, name, origin } = req.body;
    const type = 'bird';

    if (!photo || !name || !origin) {
      return res.status(400).json({ error: 'Photo, name, and origin are required' });
    }

    const pet = await petService.createPet(photo, name, origin, type);
    res.status(201).json(pet);
  } catch (error) {
    console.log("Error occurred in creating bird", error);
    res.status(500).json({ error: 'Failed to create bird' });
    next(error);
  }
};

exports.getAllBirds = async (req, res, next) => {

  const { name } = req.query;

  try {
    const result = await petService.getAllPets('bird', name);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch birds' });
    next(error);
  }
};

exports.deleteBirds = async (req, res) => {
  const { id } = req.params;

  try {
    await petService.deletePet(id);
    res.status(200).json({ message: 'Bird deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to delete bird', error });
  }
};

exports.updateBirds = async (req, res) => {
  const { name, photo, origin } = req.body;
  const { id } = req.params;

  try {
    const updatedBird = await petService.updatePet(id, name, photo, origin, 'bird');
    res.status(200).json({ message: 'Bird is successfully updated', pet: updatedBird });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update bird', error: error.message });
  }
};