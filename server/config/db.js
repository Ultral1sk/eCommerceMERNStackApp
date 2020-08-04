const connectDB = async () => {
  const mongoose = require("mongoose");
  const db = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-bojta.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("Mongo Atlas server is ready");
  } catch (error) {
    console.log("Error", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
