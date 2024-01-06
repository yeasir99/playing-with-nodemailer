import express from 'express';
import nodemailer from 'nodemailer';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
