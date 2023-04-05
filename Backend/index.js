const express = require('express');
const mongoose = require('mongoose');

const app = express();

const MONGO_URI = 'mongodb://localhost:27017/Saves';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

const saveSchema = new mongoose.Schema({
  test: String
});

const Save = mongoose.model('Save', saveSchema);

app.get('/saves', async (req, res) => {
  try {
    const saves = await Save.find();
    res.json(saves);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});