const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title must be provided"],
  },

  images: [String],

  description: {
    type: String,
    default: "you can provide a description",
  },

  hours: {
    type: String,
    required: true,
    default: "9:00 am",
  },

  cost: {
    type: Number,
    required: [true, "Cost must be provided"],
  },
  experience: {
    type: String,
    required: true,
    default: "2 year",
  },
  descriptor: {
    type: String,
    required: true,
  },

  region: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },

  links: [String],
});

const Recommendation = mongoose.model("Recommendation", recommendationSchema);

module.exports = Recommendation;
