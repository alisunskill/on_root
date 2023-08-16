const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },

  email: [String],
  sdate: {
    type: String,
    required: true,
  },
  edate: {
    type: String,
    required: true,
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
