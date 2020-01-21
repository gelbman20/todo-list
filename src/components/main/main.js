import React, {Component} from "react";
import './main.scss';
import NewItem from "../new-item";
import TodoList from "../todo-list";
import FilterButton from "../filter-buttons";

export default class Main extends Component {
  state = {
    newItem: '',
    filterType: null
  };

  callNewItem = (text) => {
    this.setState({
      newItem: text
    });
  };

  callFilterButtons = (type) => {
    this.setState({
      filterType: type
    })
  };

  render() {
    const newItem = this.state.newItem.length ? this.state.newItem : null;
    const filterType = this.state.filterType;

    return (
      <div className="main">
        <div className="main-header">
          <div className="main-header-left">
            <NewItem callNewItem={this.callNewItem}/>
          </div>
          <div className="main-header-right">
            <FilterButton callFilterButtons={this.callFilterButtons}/>
          </div>
        </div>
        <TodoList filterType={filterType} newItem={newItem}/>
      </div>
    )
  }
}