import React, {Component} from "react";
import './todo-list.scss';
import ListItem from "../list-item";

function itemIndex(arr, id) {
  const currentItem = arr.filter((item) => item.id === id);
  return arr.indexOf(...currentItem);
}

function toggleProperty(arr, id, property) {
  const index = itemIndex(arr, id);
  const currentItem = arr[index];
  currentItem[property] = !currentItem[property];
  const arrLeft = arr.slice(0, index);
  const arrRight = arr.slice(index + 1);

  return [...arrLeft, currentItem, ...arrRight];
}

export default class TodoList extends Component {
  data = [
    {id: 0, label: 'Drink Some coffee', done: false, important: false},
    {id: 1, label: 'Eat Burger', done: false, important: true},
    {id: 2, label: 'Order Pizza', done: false, important: false},
    {id: 3, label: 'Create Good Todo App', done: true, important: false},
  ];

  counter = this.data.length;

  state = {
    data: this.data
  };

  toggleDone = (id) => {
    const result = toggleProperty(this.state.data, id, 'done');
    this.setState(() => {
      return {
        data: result
      }
    });
  };

  toggleImportant = (id) => {
    const result = toggleProperty(this.state.data, id, 'important');
    this.setState(() => {
      return {
        data: result
      }
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.newItem !== this.props.newItem) {
      if (this.props.newItem) {
        const arr = this.state.data;
        let id = this.counter++;
        const label = this.props.newItem;
        arr.push({
          id,
          label,
          done: false,
          important: false
        });

        this.setState(() => {
          return {
            data: arr
          }
        });
      }
    }
  }

  render() {
    let {data} = this.state;
    let {filterType} = this.props;

    if (filterType) {
      switch (filterType) {
        case 'important':
          data = data.filter((item) => item.important);
          break;
        case 'done':
          data = data.filter((item) => item.done);
          break;
        default:
          data = this.state.data;
          break;
      }
    }

    return (
      <ul className='todo-list'>
        <ListItem data={data} toggleDone={this.toggleDone} toggleImportant={this.toggleImportant}/>
      </ul>
    );
  }
}