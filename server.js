import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

const PORT = 5000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// contact us
app.post('/api/send-email', (req, res) => {
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
