import React, { Component } from "react";
import './TodoList.scss';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    );
  }
}