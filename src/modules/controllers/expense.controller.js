const Expense = require('../../db/models/expense/index');

module.exports.getAllExpenses = (req, res, next) => {
  Expense.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createExpense = (req, res, next) => {
  const expense = new Expense(req.body);
  const { body } = req;
  if (body) {
    expense.save().then(() => {
      Expense.find().then(result => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send('Error! Params not correct');
  };
};

module.exports.changeExpenseInfo = (req, res, next) => {
  const { body } = req;
  const { _id } = body;
  if (body.hasOwnProperty('_id') && (body.hasOwnProperty('text') || body.hasOwnProperty('isCheck'))) {
    Expense.updateOne({ _id: _id }, body).then(() => {
      Expense.find().then(result => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send('Error! Params not correct');
  };
};

module.exports.deleteExpense = (req, res) => {
  const { id } = req.query;
  if (id) {
    Expense.deleteOne({ _id: id }).then(() => {
      Expense.find().then(result => {
        res.send({ data: result })
      });
    });
  } else {
    res.status(422).send('Error! Params not correct');
  };
};