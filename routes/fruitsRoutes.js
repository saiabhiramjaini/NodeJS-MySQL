const express = require("express");
const fruitRouter = express.Router();
const {addFruits} = require('../controllers/fruitsController');

fruitRouter.post('/add', addFruits);

module.exports = fruitRouter;