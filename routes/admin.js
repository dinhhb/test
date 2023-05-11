const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/dish-management', adminController.getDishManagement);

// router.get('/dish-detail', mainPageController.getDishDetail);

module.exports = router;
