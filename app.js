const express = require("express");
const path = require('path')
require('dotenv').config();
const PORT = 3000 || process.env;
const app = express();
const router = express.Router();
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS


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
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    }
  }),

  // Specify what the email will look like
  const mailOpts = {
    from: "Your sender info here", // This is ignored by Gmail
    to: GMAIL_USER,
    subject: "New message from contact form at kopels.dev",
    text: `The name is the sender: ${req.body.name},
    The email of the sender: (${req.body.email}),
    says: ${req.body.message}.`
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (err, res) => {
    if (err) {
      return console.log(err); // Show a page indicating failure}
    } else return res.json;
  });
});

  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
