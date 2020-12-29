const mongoose = require("mongoose");

const globalMessageSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const GlobalMessage = mongoose.model("Global_message", globalMessageSchema);

module.exports = GlobalMessage;
