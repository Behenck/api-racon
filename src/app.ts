import express from 'express';
import http from 'http';
import path from 'path';
import fs from 'fs';

const app = express();
const serverHttp = http.createServer(app);

app.use(express.json());

app.get("/api", async (req, res) => {
  const content = fs.readFileSync(path.join(__dirname, 'api.json'), 'utf-8');
  res.send(content);
});

export { serverHttp };