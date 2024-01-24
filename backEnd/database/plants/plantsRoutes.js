const express = require('express');
const router = express.Router();
const plantController = require('./plantsControllers');

router.get("/plants",plantController.getAllPlants)
router.get("/plant",plantController.getPlantByName)


module.exports = router