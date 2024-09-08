const express = require('express');
const { getTestimonies } = require('../controllers/testimonyController');

const router = express.Router();

router.get('/', getTestimonies)


module.exports = router