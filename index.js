const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/health', (req, res) => {
  res.status(500).send('Unhealthy'); // Changed status code to 500
});

app.get('/ready', (req, res) => {
  res.status(500).send('Not Ready'); // Changed status code to 500
});

app.listen(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});
