const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/comment', userController.getComment);

router.get('/liked-dish', userController.getLikedDish);

router.get('/shared-dish', userController.getSharedDish);

router.get('/add-dish', userController.getAddDish);

module.exports = router;
