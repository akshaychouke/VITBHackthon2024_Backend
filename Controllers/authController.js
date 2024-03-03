const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  let { username, email, password } = req.body;
  password = "akshay123";
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    res.status(201).json({ message: "User registered successfully", password,hashedPassword });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    res.status(200).json({ message: "Login API" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signup, login };
