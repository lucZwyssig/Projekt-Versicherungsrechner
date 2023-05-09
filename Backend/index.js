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
  //change this to be for Schadensrechner + Vergleicher
  name: String,
  hausw: Number,
  versum: Number,
  damage: Number,
  premium: Number
});

const gameSchema = new mongoose.Schema({
  name: String,
  score: Number,
  time: Number,
  });
//figure out what the schema should be

const Calculator = mongoose.model('Calculator', saveSchema, 'calculator');

const Game = mongoose.model('Game', gameSchema, 'game')

app.get('/api/calculator', async (req, res) => {
  const calculator = await Calculator.find();
  res.json(calculator);
});


app.get('/api/game', async (req, res) => {
  const game = await Game.find();
  res.json(game);
})

app.post('/api/calculatorpost', async (req, res) => {
  try {
    const {name, hausw, versum, damage, premium} = req.body;

    const data = new Calculator({
      name,
      hausw,
      versum,
      damage,
      premium
    });

    const insertdata = await data.save();
    res.json(insertdata);
  } catch(error){
    console.log(error);
  }
})




app.listen(3001, () => console.log('Server started at http://localhost:3001'));