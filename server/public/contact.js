var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const user = new Schema({
  first_name: { type: String, required: true },
  middle_name: { type: String },
  last_name: { type: String, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  address: {
    h_no: { type: Number },
    area: { type: String },
    city: { type: String },
  },
});

module.exports = mongoose.model("user", user);
