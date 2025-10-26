const express = require("express");
const app = express();
const Category = require("../models/Category");

app.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ ok: true, data: categories });
  } catch {
    res.status(500).json({ ok: false, error: "Failed to get categories" });
  }
});

app.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name)
      return res.status(400).json({ ok: false, error: "Name required" });

    const category = await Category.create({ name });
    res.status(200).json({ ok: true, data: category });
  } catch {
    res.status(500).json({ ok: false, error: "Failed to create category" });
  }
});

module.exports = app;
