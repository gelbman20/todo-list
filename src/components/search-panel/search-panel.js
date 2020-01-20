import React from "react";
import './search-panel.scss';
import {SearchIcon} from "../icons";

function SearchPanel() {
  return (
    <div className="search-panel">
      <SearchIcon classname='search-panel-icon'/>
      <label className='search-panel-label' htmlFor="search-panel-input">Search</label>
      <input id='search-panel-input' className='search-panel-input' type="text"/>
    </div>
  );
}

export default SearchPanel;