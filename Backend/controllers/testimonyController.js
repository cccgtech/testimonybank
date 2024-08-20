const Testimony = require('../models/Testimony')
const mongoose = require("mongoose");

const getTestimonies = async (req, res) => {
    const testimony = await Testimony.find({}).sort({ createdAt: -1 });
    res.status(200).json(testimony);
  };

  const getTestimony = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Testimony not found" });
    }
  
    const testimony = await Testimony.findById(id);
  
    if (!testimony) {
      return res.status(404).json({ error: "Testimony not found" });
    }
  
    res.status(200).json(testimony);
  };

  const createTestimony = async (req, res) => {
    const { subject, name, newTestimony } = req.body;
  
    try {
      const testimony = await Testimony.create({ subject, name, newTestimony });
      res.status(200).json(testimony);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = {
    getTestimonies,
    getTestimony,
    createTestimony,
  };
