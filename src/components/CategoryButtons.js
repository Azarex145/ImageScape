import React from "react";
import "./CategoryButton.css";
const CategoryButtons = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
  return (
    <div className="flex category">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active-category" : ""}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
