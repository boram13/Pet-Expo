const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const petRoutes = require('./routes/pet');
const catsRoutes = require('./routes/cat');
const dogsRoutes = require('./routes/dog');
const birdsRoutes = require('./routes/bird');


const app = express();
const PORT = process.env.PORT || 4002

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/pets', petRoutes);
app.use('/cats', catsRoutes);
app.use('/dogs', dogsRoutes);
app.use('/birds', birdsRoutes);

app.use((error, req, res, next) => {
  console.error("Unhandled exception:", error);
  const message = error.message;
  const data = error.data;
  res.status(error.statusCode || 500).json({ message: message, data: data });
});

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://bm200000:bm200000@cluster0.h5tix4x.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});