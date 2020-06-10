const express = require("express");
const path = require('path')
require('dotenv').config();
const PORT = 3000 || process.env;
const app = express();
const router = express.Router();
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const EMAIL_USER = process.env.PEUN
const EMAIL_PASS = process.env.PEPW
const EMAIL_HOST = process.env.HOST


// public folder routes are not seen as router routes.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());



router.get("/", function(req, res) {
  // res.sendFile(path.join(__dirname+"/index.html"));
  res.sendFile("index.html")
});
router.get("/contact.html", function(req, res) {
  // res.sendFile(path.join(__dirname+"/index.html"));
  res.sendFile("contact.html")
});

// POST route from contact form
app.post('/contact', (req, res) => {
  check('req.body.name').isLength({ min: 3 });
  check('req.body.message').isLength({ min: 15 });
  check('req.body.email').isEmail();
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: process.env.HOST ,
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    }
  }),

  // Specify what the email will look like
  const mailOpts = {
    from: req.body.email || 'From contact form. Gmsil ignores this.', // This is ignored by Gmail
    to: GMAIL_USER,
    subject: "New message from contact form at kopels.dev",
    text: `The name is the sender: ${req.body.name},
    The email of the sender: (${req.body.email}),
    says: ${req.body.message}.`
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (req, res) => {
    //using express's built in error checking and validation to build an object of errors is exist.
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else return res.json;
  });
});

  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
