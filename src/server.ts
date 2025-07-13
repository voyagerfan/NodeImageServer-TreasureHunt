import express, { Request, Response } from 'express';

const app = express();
const port = 9000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});