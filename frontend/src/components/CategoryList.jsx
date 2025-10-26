import React from "react";

const CategoryList = ({ categories }) => {
  return (
    <ul className="list-group mb-3">
      {categories.map((category) => (
        <li key={category._id} className="list-group-item">
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
