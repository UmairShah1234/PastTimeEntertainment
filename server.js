import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const PORT = 5001;

app.use(
  cors({
    origin: "https://pastimeentertainment.in",
  })
);
// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const serverDir = dirname(__filename);
const staticDir = path.join(serverDir, 'PastTimeEntertainment', 'dist');

// Serve static files from the React app
app.use(express.static(staticDir));

// Handle other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});
// contact us
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;
console.log(req.body);
  // Configure the SMTP transporter (use your email provider's SMTP settings)
  const transporter = nodemailer.createTransport({
    service: 'smtpout.secureserver.net',
    port: 465 , // SMTP port
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
 
    debug: true,
    // auth: {
    //   user: 'pastimentmt@gmail.com',
    //   pass: 'vmwd qtwb wyfp mzkw',
    // },
    auth: {
      user: 'support@pastimeentertainment.in',
      pass: 'Pastime@2024',
    },
  });

  const mailOptions = {
    from: "support@pastimeentertainment.in",
    to: 'pastimentmt@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    // console.log(error)
    console.log(info)
    if (error) {
      res.status(500).send('Error sending email');
    } else {
        console.log('Email sent successfully',info)
      res.status(200).send('Email sent successfully');

    }
  });
});

// inquire form
app.post('/api/send-inquiry', (req, res) => {
  const { name, email, message } = req.body;

  // Configure the SMTP transporter (use your email provider's SMTP settings)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'pastimentmt@gmail.com',
      pass: 'vmwd qtwb wyfp mzkw',
    },
  });

  const mailOptions = {
    from: "pastimentmt@gmail.com",
    to: 'pastimentmt@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    // console.log(error)
    if (error) {
      res.status(500).send('Error sending email');
    } else {
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Backend is running ON port ${PORT}`);
});