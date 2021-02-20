const mongoose = require("mongoose");

const TransitionSchema = mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: Number, required: true },
  email: { type: String, required: true },
  transfer_balance: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transition", TransitionSchema);
