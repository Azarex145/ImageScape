import React from "react";
import { FaTimes } from "react-icons/fa";
import "./ImageViewModal.css";

const ImageViewModal = ({ image, onClose }) => {
  return (
    <div className="flex imageViewModal">
      <div className="modalContent">
        <img
          src={image.largeImageURL}
          alt={image.tags}
          className="modalImage"
        />
        <FaTimes className="closeIcon" onClick={onClose} />
      </div>
    </div>
  );
};

export default ImageViewModal;
