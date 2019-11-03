const express = require("express");
const path = require('path')
const PORT = 3000;
const app = express();
const router = express.Router();

// public folder routes are not seen as router routes.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



router.get("/", function(req, res) {
  // res.sendFile(path.join(__dirname+"/index.html"));
  res.sendFile("index.html")
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
