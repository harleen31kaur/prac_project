const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please add your email address"],
    },

    first_Name: {
      type: String,
      required: [true, "Please add your first name"],
    },
    last_Name: {
      type: String,
      required: [true, "Please add your last name"],
    },
    age: {
      type: Number,
      required: [true, "Please add your age"],
    },
    blood_group: {
      type: String,
      required: [true, "Please add your blood group"],
    },
    gender: {
      type: String,
      required: [true, "Please specify your gender"],
    },
    phone_number: {
      type: String,
      required: [true, "Please add your phone number"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("User", userSchema);
