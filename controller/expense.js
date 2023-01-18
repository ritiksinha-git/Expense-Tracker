const Expense = require('../models/expense');

exports.addExpense = async (req, res) => {
  try {
    const { amount, description, category } = req.body;
    const expense = await Expense.create({ amount, description, category });
    res.status(201).json({ expense });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json({ allExpenses: expenses });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const { amount, description, category } = req.body;
    const expense = await Expense.findByPk(expenseId);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    expense.amount = amount;
    expense.description = description;
    expense.category = category;
    await expense.save();
    res.status(200).json({ expense });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const expense = await Expense.findByPk(expenseId);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    await expense.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error });
  }
};
