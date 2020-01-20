import React from "react";
import './main.scss';
import NewItem from "../new-item";
import TodoList from "../todo-list";
import FilterButton from "../filter-buttons";

function Main() {
  return(
    <div className="main">
      <NewItem/>
      <FilterButton/>
      <TodoList/>
    </div>
  )
}

export default Main;