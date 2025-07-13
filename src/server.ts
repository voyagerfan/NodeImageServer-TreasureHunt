import express, { Response } from 'express';

const app = express();
const port = 9000;

app.get('/', (_, res: Response) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});