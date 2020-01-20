import React from "react";
import './filter-buttons.scss';

function FilterButton() {
  return (
    <div className="btn-group btn-filter">
      <button>Important</button>
      <button>Done</button>
    </div>
  );
}

export default FilterButton;