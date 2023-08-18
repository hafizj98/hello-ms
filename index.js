const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/health', (req, res) => {
  res.status(200).sed('Healthy');
});

app.get('/ready', (req, res) => {
  res.status(200).sed('Ready');
});

app.lsten(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});
