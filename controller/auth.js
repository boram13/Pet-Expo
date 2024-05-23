const { body, validationResult } = require('express-validator/check');
const authService = require('../service/auth');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secretKey = "secretcode";

exports.signup = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const errors = validationResult(req); // mock
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.');
      error.data = errors.array();
      throw error;
    }

    const inputData = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      surname: req.body.surname,
      role: req.body.role
    };

    const result = await authService.signup(inputData);
    const token = jwt.sign({ email: result.email }, secretKey, { expiresIn: "2h" });

    res.json({ message: 'User created!', userId: result._id });
  } catch (err) {
    next(err);
    console.log("Something happened but was correctly handled", err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const response = await authService.loginUser(email, password);
    const userId = response.data.userId;

    res.json(response.data);
  } catch (error) {
    next(error);
  }
};