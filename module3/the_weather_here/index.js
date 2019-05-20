const express = require('express');
const Datastore = require('nedb');
const fetch = require('node-fetch');

const app = express();
app.listen(3000, () => console.log('Starting server: http://localhost:3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});

app.get('/weather', async (request, response) => {
  // const api_url = `https://api.darksky.net/forecast/08fe01a78943266193fc7a23625f68fa/${lat},${lon}`;
  const api_url = `https://api.darksky.net/forecast/08fe01a78943266193fc7a23625f68fa/37.8267,-122.4233`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});
