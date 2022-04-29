import React from "react";

function DateSelection({ handleOnChange, handleOnClick}) {
  return(
    <div className="date--container">
      <label>Date:</label>
      <input aria-label="date" type="text" placeholder="YYYY-MM-DD" onChange={handleOnChange} />
      <button type="button" onClick={handleOnClick}>Show</button>
    </div>
  );
}

export default DateSelection;