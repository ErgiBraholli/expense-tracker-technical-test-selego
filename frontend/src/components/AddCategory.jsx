import React, { useState } from "react";
import api from "../services/api";

const AddCategory = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) return;
    await api.post("/categories", { name });
    setName("");
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        className="form-control mb-2"
        placeholder="Add New Category..."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button className="btn btn-primary w-100">Add Category</button>
    </form>
  );
};

export default AddCategory;
