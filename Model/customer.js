const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: Number, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("Customer", CustomerSchema);
