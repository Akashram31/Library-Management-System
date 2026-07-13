const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log("MONGO_URI:", process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.log("Database Connection Failed:");
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;