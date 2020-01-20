import React, { Component } from "react";
import './todo-list.scss';
import ListItem from "../list-item";

export default class TodoList extends Component {
  render() {
    return (
      <ul className='todo-list'>
        <ListItem />
      </ul>
    );
  }
}