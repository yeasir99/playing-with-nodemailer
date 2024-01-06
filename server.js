import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  const mailOptions = {
    from: {
      name: 'replace with your name',
      address: process.env.USER,
    },
    to: process.env.RECEPIENT, // list of receivers
    subject: 'mail from node',
    text: 'hello from node js',
  };

  const sendMail = async () => {
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(info);
      res.status(200).send('Email sent');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error');
    }
  };
  sendMail();
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
