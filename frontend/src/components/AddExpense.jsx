import React, { useState } from "react";
import api from "../services/api";

const AddExpense = ({ categories, onSubmit }) => {
  const [categoryId, setCategoryId] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryId || !amount) return;
    await api.post("/expenses", {
      categoryId,
      amount: Number(amount),
      description,
    });
    setAmount("");
    setDescription("");
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Expense</h2>
      <select
        className="form-select mb-2"
        value={categoryId}
        onChange={(e) => {
          setCategoryId(e.target.value);
        }}
      >
        <option value="">Select category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        className="form-control mb-2"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <input
        className="form-control mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button className="btn btn-success">Add Expense</button>
    </form>
  );
};

export default AddExpense;
