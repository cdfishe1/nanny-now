require('dotenv').config();
const express = require("express");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  console.log(req.body);
})

const mailFormHandler = (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const comments = document.querySelector('#comments').value.trim();

    console.log(`
    ${firstName}
    ${lastName}
    ${email}
    ${comments}
    `);

    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_KEY
    }
    });

    const mailOptions = {
        from: `${firstName} ${lastName} <${email}>`,
        to: 'nannynowproject@gmail.com',
        replyTo: `${email}`,
        subject: 'Feedback about Nanny Now',
        text: `${comments}`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
};

document
  .querySelector(".mailForm")
  .addEventListener("submit", mailFormHandler);