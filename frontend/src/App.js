import React, { useState, useEffect } from "react";
import api from "./services/api";
import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import TotalsBar from "./components/TotalsBar";

function App() {
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [overBudget, setOverBudget] = useState(false);

  const loadData = async () => {
    const categoriesRes = await api.get("/categories");
    const expensesRes = await api.get("/expenses");

    setCategories(categoriesRes.data.data);
    setExpenses(expensesRes.data.data.expenses);
    setTotal(expensesRes.data.data.total);
    setOverBudget(expensesRes.data.data.overBudget);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3">Expense Tracker</h2>
      <TotalsBar total={total} overBudget={overBudget} />
      <div className="row">
        <div className="col-md-4">
          <AddCategory onSubmit={loadData} />
          <CategoryList categories={categories} />
        </div>
        <div className="col-md-8">
          <AddExpense categories={categories} onSubmit={loadData} />
          <ExpenseList expenses={expenses} onDelete={loadData} />
        </div>
      </div>
    </div>
  );
}

export default App;
