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
  try {
    const result = await petService.getAllPets(); 
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

