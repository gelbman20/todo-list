import React from "react";
import './new-item.scss';

function NewItem() {
  return (
    <div className="new-item">
      <button className='btn new-item-btn'>Add Task</button>
      <input className='new-item-input' type="text"/>
    </div>
  );
}

export default NewItem;