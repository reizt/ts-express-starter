import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  const message = 'Hello world!';
  res.status(200).send({ message });
});

const DEFAULT_PORT = 3000;
let port = DEFAULT_PORT;
for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === '-p') {
    const nextArg = process.argv[i + 1];
    if (nextArg != null) {
      const portInt = parseInt(nextArg);
      if (!isNaN(portInt)) port = portInt;
    }
    i++;
  }
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
