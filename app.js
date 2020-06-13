const express = require("express");
const path = require('path');
const mail = require('dotenv').config();
const PORT = 3000;
const app = express();
const router = express.Router();
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const USER = process.env.PEUN;
const PASS = process.env.PEPW;
const SERVER = process.env.HOST;





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
  console.log(req.params+'          '+req.body);
  
  check('req.body.name').isLength({ min: 3 });
  check('req.body.message').isLength({ min: 15 });
  check('req.body.email').isEmail();
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: SERVER,
    port: 465,
    secure: true,
    auth: {
      user: USER,
      pass: PASS,
    }
  }),

  // Specify what the email will look like
 mailOpts = {
    from: req.body.email || 'From contact form. Gmsil ignores this.', // This is ignored by Gmail
    to: USER,
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
