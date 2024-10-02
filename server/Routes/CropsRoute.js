const express=require('express')
const { create,getAll,getById,update,deleteCrop,searchByName,getByCategory,getBySeason } =require('../controllers/CropDetailsController.js');

const route = express.Router();

// Get all crops
route.get('/', getAll);

// Get a specific crop by ID
route.get('/:id', getById);

// Create a new crop
route.post('/addcrop', create);

// Update an existing crop
route.put('/:id', update);

// Delete a crop
route.delete('/:id', deleteCrop);

module.exports=route
