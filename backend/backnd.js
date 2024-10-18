const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/hospital', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection active'))
  .catch(err => console.error('MongoDB connection error:', err));

const patientSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const Patient = mongoose.model('Patient', patientSchema);

//signup
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const patient = new Patient({ username, email, password });
  try {
    await patient.save();
    res.status(201).send('Signed in Successfully');
  } catch (error) {
    res.status(400).send('Error creating patient');
  }
});

//login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.findOne({ email, password });
    if (patient) {
      res.status(200).send('Login successful');
    } else {
      res.status(400).send('Invalid email or password');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));