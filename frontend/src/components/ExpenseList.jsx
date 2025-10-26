import React from "react";
import api from "../services/api";

const ExpenseList = ({ expenses, onDelete }) => {
  const handleDelete = async (id) => {
    await api.delete("/expenses/" + id);
    onDelete();
  };

  return (
    <ul className="list-group mt-3">
      {expenses.map((expense) => (
        <li
          key={expense._id}
          className="list-group-item d-flex justify-content-between"
        >
          <div>
            {expense.description} - ${expense.amount} -{" "}
            {expense.categoryId.name}
          </div>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(expense._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
