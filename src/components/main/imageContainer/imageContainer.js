import React from "react";

function ImageContainer({ date, imageUrl, title }) {
  return(
    <div className="image--container">
      <h2>{title}</h2>
      <p>{date}</p>
      <img src={imageUrl} alt={title} height="568" width="853" />
    </div>
  );
}

export default ImageContainer;