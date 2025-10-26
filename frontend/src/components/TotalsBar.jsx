import React from "react";

const TotalsBar = ({ total, overBudget }) => {
  return (
    <div className={`alert ${overBudget ? "alert-danger" : "alert-info"}`}>
      Total: ${total} {overBudget && "Your expenses are over budget!"}
    </div>
  );
};

export default TotalsBar;
