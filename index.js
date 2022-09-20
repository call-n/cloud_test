const express = require('express');
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';
const codename = 'callenilsson1';

const calc_whip_length = (width, height) => {
    const c = Math.round(Math.sqrt(Math.pow(height, 2) + Math.pow(width/2, 2))* 100) / 100;
    return {"whip_length": c};
};

const calc_idol_weight = (vol) => {
  const idol_density = 19.3;
  return {"idol_weight": Math.round(idol_density * vol* 100) / 100 };
};

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/:codename/whip-jump', (req, res) => {
  if (!req.params.codename === codename) {
    res.send(301, 'Wrong codename')
  }
  var width = req.query.width;
  var height = req.query.height;

  res.send(200, calc_whip_length(width, height));
});

app.get('/:codename/switch-idol', (req, res) => {
  if (!req.params.codename === codename) {
    res.send(301, 'Wrong codename')
  }
  var vol = req.query.vol;

  res.send(200, calc_idol_weight(vol));
});

app.get('/:codename/escape-logs', (req, res) => {
  if (!req.params.codename === codename) {
    res.send(301, 'Wrong codename')
  }

  res.send(200, {'escape-tip': 'code to escape'});
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
