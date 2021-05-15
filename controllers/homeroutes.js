const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
//const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("homepage", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("signup", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup-redo", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("signup-redo");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render("login", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get search bar after sign up
router.get("/search", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  try {
    // Pass serialized data and session flag into template
    res.render("search", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get contact us page
router.get("/contact", async (req, res) => {
  try {
    res.render("contact");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get about us page
router.get("/about", async (req, res) => {
  try {
    res.render("about");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/send", (req, res) => {
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
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_KEY,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: '"Node Mailer Contact" <nannynowproject@gmail.com>',
    to: "cdfishe1@yahoo.com",
    replyTo: `${req.body.email}`,
    subject: "Feedback about Nanny Now",
    text: `Hello World`,
    html: output,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.render("contact", { msg: "Email has been sent." });
    }
  });
});
// router.post('/send', (req, res) => {
//   try {
//     console.log(req.body)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

module.exports = router;
