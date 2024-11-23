const mongoose = require("mongoose");

async function dbconnect() {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/deliverydetails"
    );
    console.log("MongoDB connected");
    return connection;
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

module.exports = dbconnect;
