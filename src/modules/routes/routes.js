const express = require('express');
const router = express.Router();

const {
  getAllExpenses,
  createExpense,
  changeExpenseInfo,
  deleteExpense
} = require('../controllers/expense.controller');

router.get('/allExpenses', getAllExpenses);
router.post('/createExpense', createExpense);
router.patch('/updateExpense', changeExpenseInfo);
router.delete('/deleteExpense', deleteExpense);

module.exports = router;