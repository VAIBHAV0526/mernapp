const mongoose = require("mongoose");

// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/db";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    const data = await mongoose.connection.db.collection("fooder").find({}).toArray();
   // console.log(data);
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
