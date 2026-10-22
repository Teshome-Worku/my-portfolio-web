const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    projectType: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    budget: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt automatically
  }
);

module.exports = mongoose.model("Contact", contactSchema);
