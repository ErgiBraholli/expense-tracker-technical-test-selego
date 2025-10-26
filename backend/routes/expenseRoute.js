const express = require("express");
const app = express();
const Expense = require("../models/Expense");
const sendBudgetAlert = require("../services/emailService");

app.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().populate("categoryId", "name");
    const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
    const limit = Number(process.env.BUDGET_LIMIT);
    const overBudget = total > limit;
    res.status(200).json({ ok: true, data: { expenses, total, overBudget } });
  } catch {
    res.status(500).json({ ok: false, error: "Failed to get expenses!" });
  }
});

app.post("/", async (req, res) => {
  try {
    const { categoryId, amount, description } = req.body;
    if (!categoryId || !amount)
      return res.status(400).json({ ok: false, error: "Fileds missing!" });

    const expense = await Expense.create({ categoryId, amount, description });

    const all = await Expense.find();
    const total = all.reduce((sum, e) => sum + Number(e.amount), 0);
    const limit = Number(process.env.BUDGET_LIMIT);
    if (total > limit) await sendBudgetAlert(total);

    res.status(200).json({ ok: true, data: expense });
  } catch {
    res.status(500).json({ ok: false, error: "Failed to create expense!" });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const expenseId = req.params.id;
    await Expense.deleteOne({ _id: expenseId });
    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ ok: false, error: "Failed to delete expense!" });
  }
});

module.exports = app;
