import express, { Request, Response } from 'express';
import { promises as fs } from 'fs';
import { loadImageMap, masterImageMap } from './imageRepo/imageMap'

const app = express();
const host = 'localhost';
const port = 9000;

loadImageMap();

app.get('/', (_, res: Response) => {
  res.send('Hello from the TreasureHunt Image server!');
});

app.get('/images', async (req: Request, res: Response) => {
  const imageName = req.query.imageName;

  if(typeof imageName !== 'string') {
    res.status(400).send("Invalid or missing image name")
    return;
  }

  const normalizedName = imageName.toLowerCase();
  const filePath = masterImageMap.get(normalizedName);
  if(!filePath) {
    res.status(404).send("Image not found")
    return;
  }

  try {
    const data = await fs.readFile(filePath);
    res.contentType('image/jpeg');
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(`Error reading file: ${err instanceof Error ? err.message : err}`);
  }
});
       

app.listen(port, host, () => {
  console.log(`Server is running on http://localhost:${port}`);
});