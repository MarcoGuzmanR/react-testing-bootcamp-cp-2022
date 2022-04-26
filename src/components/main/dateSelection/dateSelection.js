import React from "react";

function DateSelection({ handleOnChange, handleOnClick}) {
  return(
    <React.Fragment>
      <label>Date:</label>
      <input aria-label="date" type="text" placeholder="YYYY-MM-DD" onChange={handleOnChange} />
      <button type="button" onClick={handleOnClick}>Show</button>
    </React.Fragment>
  );
}

export default DateSelection;