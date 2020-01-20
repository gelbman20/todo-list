import React from "react";
import './main.scss';
import NewItem from "../new-item";
import TodoList from "../todo-list";
import FilterButton from "../filter-buttons";

function Main() {
  return(
    <div className="main">
      <div className="main-header">
        <div className="main-header-left">
          <NewItem/>
        </div>
        <div className="main-header-right">
          <FilterButton/>
        </div>
      </div>
      <TodoList/>
    </div>
  )
}

export default Main;