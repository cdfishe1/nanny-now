const router = require("express").Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/send', (req, res) => {
    try {
      const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>

        <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Email: ${req.body.email}</li>
        
        <h3>Message</h3>
        <p>${req.body.comments}</p>
      `;

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        }
      });
    
        const mailOptions = {
            from: '"Node Mailer Contact" <nannynowproject@gmail.com>',
            to: 'cdfishe1@yahoo.com',
            replyTo: `${req.body.email}`,
            subject: 'Feedback about Nanny Now',
            text: `Hello World`,
            html: output
        };
    
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.render('/contact', {msg: 'Email has been sent.'});
        }
        });
    } catch (err) {
      res.status(500).json(err);
    }
  })

  module.exports = router;