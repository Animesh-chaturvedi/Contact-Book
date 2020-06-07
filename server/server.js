var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://animesh:shanky98@contact-ympgf.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  function (err, db) {
    if (err) {
      console.log(err);
    } else {
      console.log("connected db");
    }
  }
);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
