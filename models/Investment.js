const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestmentSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  value: {
    type: mongoose.Decimal128,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("investments", InvestmentSchema);