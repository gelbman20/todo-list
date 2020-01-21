import React, {Component} from "react";
import './filter-buttons.scss';

export default class FilterButton extends Component {

  state = {
    all: true,
    important: false,
    done: false
  };

  clickHandle = (type) => {
    this.props.callFilterButtons(type);

    switch (type) {
      case 'all':
        this.setState({
          all: !this.state.all,
          important: false,
          done: false
        });
        break;
      case 'important':
        this.setState({
          all: false,
          important: !this.state.important,
          done: false
        });
        break;
      case 'done':
        this.setState({
          all: false,
          important: false,
          done: !this.state.done
        });
        break;
      default:
        break;
    }
  };

  render() {

    const {all, important, done} = this.state;

    const allClassName =  !all ? 'btn' : 'btn active';
    const importantClassName =  !important ? 'btn btn-green' : 'btn btn-green active';
    const doneClassName =  !done ? 'btn btn-red' : 'btn btn-red active';

    return (
      <div className="btn-group btn-filter">
        <button onClick={ () => this.clickHandle('all') } className={allClassName}>All</button>
        <button onClick={ () => this.clickHandle('important') } className={importantClassName}>Important</button>
        <button onClick={ () => this.clickHandle('done') } className={doneClassName}>Done</button>
      </div>
    );
  }
}

