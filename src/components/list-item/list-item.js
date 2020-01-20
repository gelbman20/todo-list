import React from "react";
import './list-item.scss';
import {CheckIcon, ImportantIcon} from "../icons";

function ListItem() {
  return(
    <React.Fragment>
      <li className='todo-list-item'>
        <CheckIcon className='todo-list-item-icon todo-list-item-icon-check' />
        <span className='todo-list-item-text'>Drink Some coffee</span>
        <ImportantIcon className='todo-list-item-icon todo-list-item-icon-important'/>
      </li>
      <li className='todo-list-item'>
        <CheckIcon className='todo-list-item-icon todo-list-item-icon-check' />
        <span className='todo-list-item-text'>Eat Burger</span>
        <ImportantIcon className='todo-list-item-icon todo-list-item-icon-important'/>
      </li>
      <li className='todo-list-item'>
        <CheckIcon className='todo-list-item-icon todo-list-item-icon-check' />
        <span className='todo-list-item-text'>Order Pizza</span>
        <ImportantIcon className='todo-list-item-icon todo-list-item-icon-important active'/>
      </li>
      <li className='todo-list-item'>
        <CheckIcon className='todo-list-item-icon todo-list-item-icon-check active' />
        <span className='todo-list-item-text active'>Create Good Todo App</span>
        <ImportantIcon className='todo-list-item-icon todo-list-item-icon-important'/>
      </li>
    </React.Fragment>
  );
}

export default ListItem;