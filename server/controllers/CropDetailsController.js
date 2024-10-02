const CropDetails = require('../models/CropDetails');

const CropDetailsController = {
  // Create a new crop detail
  create: async (req, res) => {
    try {
      const newCropDetail = new CropDetails(req.body);
      const savedCropDetail = await newCropDetail.save();
      res.status(201).json(savedCropDetail);
    } catch (error) {
      res.status(400).json({message:error.message});
    }
  },

  // Get all crop details
  getAll: async (req, res) => {
    try {
      const cropDetails = await CropDetails.find();
      res.json(cropDetails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single crop detail by ID
  getById: async (req, res) => {
    try {
      const cropDetail = await CropDetails.findById(req.params.id);
      if (!cropDetail) return res.status(404).json({ message: 'Crop detail not found' });
      res.json(cropDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a crop detail
  update: async (req, res) => {
    try {
      const updatedCropDetail = await CropDetails.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedCropDetail) return res.status(404).json({ message: 'Crop detail not found' });
      res.json(updatedCropDetail);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a crop detail
  deleteCrop: async (req, res) => {
    try {
      const deletedCropDetail = await CropDetails.findByIdAndDelete(req.params.id);
      if (!deletedCropDetail) return res.status(404).json({ message: 'Crop detail not found' });
      res.json({ message: 'Crop detail deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Search crop details by name
  searchByName: async (req, res) => {
    try {
      const { name } = req.query;
      const cropDetails = await CropDetails.find({ name: new RegExp(name, 'i') });
      res.json(cropDetails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get crop details by category
  getByCategory: async (req, res) => {
    try {
      const { category } = req.params;
      const cropDetails = await CropDetails.find({ category });
      res.json(cropDetails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get crop details by season
  getBySeason: async (req, res) => {
    try {
      const { season } = req.params;
      const cropDetails = await CropDetails.find({ season });
      res.json(cropDetails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = CropDetailsController;
