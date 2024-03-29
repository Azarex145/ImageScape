import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageData from "./ImageData";
import SearchBar from "./SearchTypeImage";
import CategoryButtons from "./CategoryButtons";
import "./ImageList.css";

const ImageList = () => {
  const [query, setQuery] = useState("india");
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedImageType, setSelectedImageType] = useState("all");

  const categories = [
    "backgrounds",
    "wallpapers",
    "abstract",
    "sky",
    "fashion",
    "nature",
    "science",
    "flowers",
    "cakes",
    "places",
    "cats",
    "space",
    "technology",
    "food",
    "sports",
    "transportation",
    "travel",
    "beach",
  ];

  useEffect(() => {
    const apiUrl = `https://pixabay.com/api/`;

    const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;
    const params = {
      key: apiKey,
      q: query,
      image_type: selectedImageType,
      category: selectedCategory,
      orientation: "horizontal",
      per_page: 40,
    };

    axios
      .get(apiUrl, { params })
      .then((response) => {
        setImages(response.data.hits);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, [query, selectedImageType, selectedCategory]);

  const handleSearch = (searchQuery, imageType) => {
    setImages([]);
    setQuery(searchQuery);
    setSelectedCategory(searchQuery);
    setSelectedImageType(imageType);
  };

  const handleCategoryChange = (category) => {
    setQuery("");
    setSelectedCategory(category);
  };

  return (
    <div className="flex imageList">
      <SearchBar
        handleSearch={handleSearch}
        handleImageTypeChange={setSelectedImageType}
        selectedImageType={selectedImageType}
      />
      <CategoryButtons
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        handleSearchQueryChange={setQuery}
      />

      <ImageData query={query ? query : selectedCategory} images={images} />
    </div>
  );
};

export default ImageList;
