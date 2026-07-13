const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log(process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("========== FULL ERROR ==========");
    console.error(err);
    console.error("Reason:", err.reason);
    console.error("Cause:", err.cause);
    console.error("================================");
    process.exit(1);
  }
};

module.exports = connectDB;