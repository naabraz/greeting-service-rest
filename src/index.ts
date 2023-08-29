import express from 'express';

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app = express();

app.get('/', (_, res) => res.send('Healthy'));

app.get('/:name', (req, res) => {
  console.log(`Saying hello to ${req.params.name}`);

  res.json({ message: `Hello: ${req.params.name}` });
});

app.use((_, res) => res.status(404));

app.listen(PORT, () => {
  console.log(`Server listening ${HOSTNAME}:${PORT}`);
});
