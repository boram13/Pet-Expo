const petService = require('../service/pet');

exports.createDogs = async (req, res, next) => {
    try {
      const { photo, name, origin } = req.body;
      const type = 'dog';
  
      if (!photo || !name || !origin) {
        return res.status(400).json({ error: 'Photo, name, and origin are required' });
      }
      const pet = await petService.createPet(photo, name, origin, type);
      res.status(201).json(pet);
    } catch (error) {
      console.log("Error occurred in creating dog", error);
      res.status(500).json({ error: 'Failed to create dog' });
      next(error);
    }
  };
  
  exports.getAllDogs = async (req, res, next) => {// do kaloj type
    try {
      const result = await petService.getAllPets('dog'); 
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch dogs' });
      next(error);
    }
  };
  
  exports.deleteDogs = async (req, res) => {
    const { id } = req.params;
  
    try {
      await petService.deletePet(id);
      res.status(200).json({ message: 'Dog deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Failed to delete dog', error });
    }
  };
  
  exports.updateDogs = async (req, res) => {
    const { name, photo, origin } = req.body;
    const { id } = req.params;
  
    try {
      const updatedDogs = await petService.updatePet(id, name, photo, origin, 'dog'); 
      res.status(200).json({ message: 'Dog is successfully updated', pet: updatedDogs });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update dog', error: error.message });
    }
  };