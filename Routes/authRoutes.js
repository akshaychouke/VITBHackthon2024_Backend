const express = require("express");
const { signup, login } = require("../Controllers/authController.js");
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
