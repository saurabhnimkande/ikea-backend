const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://saurabh:saurabh@cluster0.aw4kn.mongodb.net/ikea-clone"
  );
};
