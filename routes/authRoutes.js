const express = require("express");
const authRouter = express.Router();
const {signin} = require('../controllers/authControllers');

authRouter.post('/signin', signin);

module.exports = authRouter;