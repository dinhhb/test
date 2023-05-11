const path = require('path');

const express = require('express');

const mainPageController = require('../controllers/main-page');

const router = express.Router();

router.get('/', mainPageController.getMainPage);

router.get('/dish-detail', mainPageController.getDishDetail);

module.exports = router;
