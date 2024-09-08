const Testimony = require('../models/Testimony');
const mongoose = require('mongoose');

// Search for testimonies based on keyword
const getTestimonies = async (req, res) => {
  const { keyword } = req.query; // Grab the keyword from the query params

  let query = {};

  if (keyword) {
    query = {
      $or: [
        { subject: { $regex: keyword, $options: 'i' } },
        { name: { $regex: keyword, $options: 'i' } },
        { newTestimony: { $regex: keyword, $options: 'i' } }
      ]
    };
  }

  try {
    const testimonies = await Testimony.find(query)
      .sort({ createdAt: -1 })
      .limit(10); // Limit the results to 10
    res.status(200).json(testimonies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTestimonies,
};
