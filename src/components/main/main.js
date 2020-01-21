import React, { Component } from "react";
import './main.scss';
import NewItem from "../new-item";
import TodoList from "../todo-list";
import FilterButton from "../filter-buttons";

export default class Main extends Component{
  state = {
    newItem: ''
  };

  callNewItem = (text) => {
    this.setState({
      newItem : text
    });
  };

  render() {
    const newItem = this.state.newItem.length ? this.state.newItem : null;

    return(
      <div className="main">
        <div className="main-header">
          <div className="main-header-left">
            <NewItem callNewItem={this.callNewItem}/>
          </div>
          <div className="main-header-right">
            <FilterButton/>
          </div>
        </div>
        <TodoList newItem={ newItem }/>
      </div>
    )
  }
}