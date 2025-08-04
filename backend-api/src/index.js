require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to Secure CI‑K8s API!'));

app.get('/secure', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).send('Missing token');
  const token = auth.split(' ')[1];
  try {
    jwt.verify(token, JWT_SECRET);
    res.send('You accessed secure content!');
  } catch {
    res.status(403).send('Invalid token');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API listening on port ${port}`));
