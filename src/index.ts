import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
  const message = 'Hello world!';
  res.status(200).send({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
