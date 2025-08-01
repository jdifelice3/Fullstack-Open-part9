import express = require('express');
import calculateBmi from './bmiCalculator';

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/bmi', (req, res) => {
    let bmi:String = calculateBmi(Number(req.query.height), Number(req.query.weight));
    let results = {
        "weight": req.query.weight,
        "height": req.query.height,
        "bmi": bmi
    }

    res.json(results);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});