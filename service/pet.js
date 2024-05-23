const Pet = require('../models/pet');
const mongoose = require('mongoose');

exports.createPet = async (photo, name, origin, type) => {
    try {
        const pet = new Pet({
            photo,
            name,
            origin,
            type
        });

        await pet.save();

        return pet;
    } catch (error) {
        console.error('Error occurred while creating pet:', error);
        throw new Error('Failed to create pet: ' + error.message);
    }
};
exports.getAllPets = async (type) => { // type parameter tek get
    try {//do kaloj param si filter, kte filter e mar si querry
        let query = {};
        if(type){
            query.type = type;
        }
        const pets = await Pet.find(query);
        const total = await Pet.countDocuments(query);
        return { pets, total };
    } catch (error) {
        throw new Error('Could not find any pet!');
    }
};

exports.deletePet = async (petId) => {
    return Pet.findByIdAndDelete(petId);
};

exports.updatePet = async (id, name, photo, origin, type) => {
    const pet = await Pet.findById(id);

    if (!pet) {
        throw new Error('Pet not found');
    }
    
   pet.name = name;
   pet.photo = photo;
   pet.origin = origin;
//    pet.type = type;
   
    return await pet.save();
};

