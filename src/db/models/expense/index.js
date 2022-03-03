const mongoose = require("mongoose");

const { Schema } = mongoose;

const expenseScheme = new Schema({
  text: String,
  cach: String,
  date: String
});

module.exports = Expense = mongoose.model("expenses", expenseScheme);