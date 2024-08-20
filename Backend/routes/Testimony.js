const express = require('express');
const { getTestimony, getTestimonies, createTestimony } = require('../controllers/testimonyController');

const router = express.Router();

router.get('/', getTestimonies)

router.get('/:id', getTestimony)

router.post('/', createTestimony)


module.exports = router