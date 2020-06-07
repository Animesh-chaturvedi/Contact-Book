var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());
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
const routes = require("./routes");
app.use("/", routes);

const port = process.env.PORT || 4200;

app.listen(port, () => console.log(`Server running on port ${port}`));
