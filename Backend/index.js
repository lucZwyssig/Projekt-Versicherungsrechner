const express = require('express'); //code von Modul 162
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://user:user@localhost:27017/Saves')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

const saveSchema = new mongoose.Schema({
  test: String
});

const Save = mongoose.model('Save', saveSchema);

app.get('/api/saves', async (req, res) => {
  const saves = await Save.find();
  res.json(saves);
});

app.listen(3001, () => console.log('Server started at http://localhost:3001'));