import React from "react";
import "./CategoryButton.css";

const CategoryButtons = ({
  categories,
  selectedCategory,
  handleCategoryChange,
  handleSearchQueryChange, 
}) => {
  const handleCategoryButtonClick = (category) => {
    handleCategoryChange(category);
    handleSearchQueryChange(category); 
  };

  return (
    <div className="flex category">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active-category" : ""}
          onClick={() => handleCategoryButtonClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
