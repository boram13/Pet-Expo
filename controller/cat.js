const petService = require('../service/pet');

exports.createCats = async (req, res, next) => {
    try {
      const { photo, name, origin } = req.body;
      const type = 'cat'; 
  
      if (!photo || !name || !origin) {
        return res.status(400).json({ error: 'Photo, name, and origin are required' });
      }
  
      const pet = await petService.createPet(photo, name, origin, type);
      res.status(201).json(pet);
    } catch (error) {
      console.log("Error occurred in creating cat", error);
      res.status(500).json({ error: 'Failed to create cat' });
      next(error);
    }
  };
  
  exports.getAllCats = async (req, res, next) => {
    try {
      const result = await petService.getAllPets('cat');
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cats' });
      next(error);
    }
  };
  
  exports.deleteCats = async (req, res) => {
    const { id } = req.params;
  
    try {
      await petService.deletePet(id);
      res.status(200).json({ message: 'Cat deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Failed to delete cat', error });
    }
  };
  
  exports.updateCats = async (req, res) => {
    const { name, photo, origin } = req.body;
    const { id } = req.params;
  
    try {
      const updatedCat = await petService.updatePet(id, name, photo, origin, 'cat');// do kaloj dhe tipin 
      res.status(200).json({ message: 'Cat is successfully updated', pet: updatedCat });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update cat', error: error.message });
    }
  };