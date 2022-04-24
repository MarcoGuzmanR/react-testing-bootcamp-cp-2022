import React from "react";

function DateSelection() {
  return(
    <React.Fragment>
      <label>Date:</label>
      <input aria-label="date" type="text" placeholder="YYYY-MM-DD" />
      <button type="button">Show</button>
    </React.Fragment>
  );
}

export default DateSelection;