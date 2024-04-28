const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const studentSchema = new mongoose.Schema({
  name: String,
  registrationNumber: String,
  password: String
});
const Student = mongoose.model('Student', studentSchema);

const teacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
});
const Teacher = mongoose.model('Teacher', teacherSchema);

const parentSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const Parent = mongoose.model('Parent', parentSchema);

app.use(bodyParser.json());
app.use(cors());

// Create a new student
app.post('/dashboard/students', (req, res) => {
  const { name, registrationNumber, password } = req.body;
  const newStudent = new Student({ name, registrationNumber, password });
  newStudent.save()
    .then(() => res.status(201).json({ message: 'Student created successfully' }))
    .catch(err => {
      console.error('Error creating student:', err);
      res.status(500).json({ error: err.message });
    });
});

// Get all students
app.get('/dashboard/students', (req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => {
      console.error('Error fetching students:', err);
      res.status(500).json({ error: err.message });
    });
});

// Create a new teacher
app.post('/dashboard/teachers', (req, res) => {
  const { name, subject } = req.body;
  const newTeacher = new Teacher({ name, subject });
  newTeacher.save()
    .then(() => res.status(201).json({ message: 'Teacher created successfully' }))
    .catch(err => {
      console.error('Error creating teacher:', err);
      res.status(500).json({ error: err.message });
    });
});

// Get all teachers
app.get('/dashboard/teachers', (req, res) => {
  Teacher.find()
    .then(teachers => res.json(teachers))
    .catch(err => {
      console.error('Error fetching teachers:', err);
      res.status(500).json({ error: err.message });
    });
});

// Create a new parent
app.post('/dashboard/parents', (req, res) => {
  const { name, email } = req.body;
  const newParent = new Parent({ name, email });
  newParent.save()
    .then(() => res.status(201).json({ message: 'Parent created successfully' }))
    .catch(err => {
      console.error('Error creating parent:', err);
      res.status(500).json({ error: err.message });
    });
});

// Get all parents
app.get('/dashboard/parents', (req, res) => {
  Parent.find()
    .then(parents => res.json(parents))
    .catch(err => {
      console.error('Error fetching parents:', err);
      res.status(500).json({ error: err.message });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
