import React, { useState } from "react";
import "./SearchTypeImage.css";

const SearchBar = ({
  handleSearch,
  handleImageTypeChange,
  selectedImageType,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleImageTypeButtonClick = (imageType) => {
    handleImageTypeChange(imageType);
    setSearchQuery("");
  };

  const handleSearchButtonClick = () => {
    handleSearch(searchQuery, selectedImageType);
    setSearchQuery("");
  };

  const placeholderText = `Search for ${selectedImageType} images on ImageScape`;
  return (
    <div className="flex searchTypeImage">
      <div className="flex imageType">
        <button
          className={`imageTypeButton ${
            selectedImageType === "all" ? "activeType" : ""
          }`}
          onClick={() => handleImageTypeButtonClick("all")}
        >
          Home
        </button>
        <button
          className={`imageTypeButton ${
            selectedImageType === "photo" ? "activeType" : ""
          }`}
          onClick={() => handleImageTypeButtonClick("photo")}
        >
          Photo
        </button>
        <button
          className={`imageTypeButton ${
            selectedImageType === "illustration" ? "activeType" : ""
          }`}
          onClick={() => handleImageTypeButtonClick("illustration")}
        >
          Illustration
        </button>
        <button
          className={`imageTypeButton ${
            selectedImageType === "vector" ? "activeType" : ""
          }`}
          onClick={() => handleImageTypeButtonClick("vector")}
        >
          Vector
        </button>
      </div>

      <div className="flex searchImage">
        <input
          type="text"
          id="searchInput"
          placeholder={placeholderText}
          value={searchQuery}
          onChange={handleQueryChange}
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
