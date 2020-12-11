import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/albums', (req, res) => {
  res.send(data.albums);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serving Lewks at http://localhost:${port}`);
});