import React, { useState } from "react";
import "./ImageData.css";
import { FaEye, FaHeart } from "react-icons/fa";
import ImageViewModal from "./ImageViewModal";

const ImageData = ({ query, images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState([]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const isImageLiked = (imageId) => {
    return likedImages.includes(imageId);
  };

  const handleLikeToggle = (imageId) => {
    if (isImageLiked(imageId)) {
      setLikedImages(likedImages.filter((id) => id !== imageId));
    } else {
      setLikedImages([...likedImages, imageId]);
    }
  };

  return (
    <div className="flex imageData">
      <div className="imageCategoryTitle">
        <h1>{query} Images</h1>
      </div>
      <div className="imageGrid">
        {images.map((image) => (
          <div key={image.id} className="imageItem">
            <div className="flex imageOverlay">
              <div className="flex overlayContent">
                <div className="detail">
                  <FaEye
                    className="detailIcons view"
                    onClick={() => openModal(image)}
                  />
                </div>
                <div className="detail">
                  <FaHeart
                    className={`detailIcons like ${
                      isImageLiked(image.id) ? "liked" : ""
                    }`}
                    onClick={() => handleLikeToggle(image.id)}
                  />
                </div>
              </div>
            </div>
            <img src={image.largeImageURL} alt={image.tags} className="image" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageViewModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImageData;
