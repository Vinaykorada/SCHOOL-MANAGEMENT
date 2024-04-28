// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.post('/signup/student', async (req, res) => {
  try {
    const { name, registrationNumber, password } = req.body;
    const student = new Student({ name, registrationNumber, password });
    await student.save();
    res.status(201).json({ message: 'Student created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { registrationNumber, password } = req.body;
    const student = await Student.findOne({ registrationNumber });
    if (!student) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    if (password !== student.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
