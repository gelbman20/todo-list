import React from "react";
import './list-item.scss';
import {CheckIcon, ImportantIcon} from "../icons";

function ListItem({data, toggleDone, toggleImportant}) {
  const items = data.map(({id, label, done, important}) => {
    let textClassName = 'todo-list-item-text';
    let doneClassName = 'todo-list-item-icon todo-list-item-icon-check';
    let importantClassName = 'todo-list-item-icon todo-list-item-icon-important';

    if (done) {
      textClassName += ' active';
      doneClassName += ' active';
    }

    if (important) {
      importantClassName += ' active';
    }

    function iconDoneClick() {
      toggleDone(id);
    }

    function iconImportantClick() {
      toggleImportant(id)
    }

    return (
      <li key={id} className='todo-list-item'>
        <CheckIcon clickCheckIcon={ iconDoneClick } className={doneClassName}/>
        <span className={textClassName}>{label}</span>
        <ImportantIcon clickImportantIcon={ iconImportantClick } className={importantClassName}/>
      </li>
    );
  });

  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  );
}

export default ListItem;