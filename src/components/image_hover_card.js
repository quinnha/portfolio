import React, { useState } from "react";
import "./image_hover_card.css"; // Import your component-specific CSS file

function ImageHoverCard({ text, imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <span className="image-hover-card">
      <span
        className="text"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {text}
      </span>
      {isHovered && (
        <div className="popup">
          <img className="popup-image" src={imageSrc} alt="Popup Image" />
        </div>
      )}
    </span>
  );
}

export default ImageHoverCard;
