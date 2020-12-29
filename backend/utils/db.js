const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`Connected on ${con.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error Connecte DB : ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDb;
