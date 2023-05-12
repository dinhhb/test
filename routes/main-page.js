const path = require('path');

const express = require('express');

const dishController = require('../controllers/dish');

const router = express.Router();

router.get('/', dishController.getDishes);

router.get('/dish-detail', dishController.getDishDetail);

module.exports = router;
