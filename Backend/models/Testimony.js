const mongoose = require('mongoose');

const testimonySchema = new mongoose.Schema({
  subject: { type: String, required: true },
  name: { type: String, required: true },
  newTestimony: { type: String, required: true },
  // date: { type: Date, default: Date.now },
}, {timestamps: true});

const Testimony = mongoose.model('Testimony', testimonySchema);

module.exports = Testimony;
