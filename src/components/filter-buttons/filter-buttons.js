import React from "react";
import './filter-buttons.scss';

function FilterButton() {
  return (
    <div className="btn-group btn-filter">
      <button className='btn btn-green'>Important</button>
      <button className='btn btn-red'>Done</button>
    </div>
  );
}

export default FilterButton;