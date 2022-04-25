import React from "react";

function ImageContainer({ date, imageUrl, title }) {
  return(
    <div className="image--container">
      <h3>{title}</h3>
      <p>{date}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
}

export default ImageContainer;