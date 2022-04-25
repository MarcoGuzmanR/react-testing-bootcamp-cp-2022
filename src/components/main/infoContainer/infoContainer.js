import React from "react";

function InfoContainer({ explanation }) {
  return(
    <div className="info--container">
      <p className="explanation">{explanation}</p>
    </div>
  );
}

export default InfoContainer;