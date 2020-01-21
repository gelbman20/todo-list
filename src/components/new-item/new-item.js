import React, {Component} from "react";
import './new-item.scss';

export default class NewItem extends Component {
  state = {
    isActive: false,
    inputText: ''
  };

  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  };

  addItem = (e) => {
    e.preventDefault();
    if(this.state.inputText.length) {
      this.props.callNewItem(this.state.inputText);

      this.setState({
        inputText: ''
      });
      this.toggleActive();
    }
  };

  inputChangeHandler = (event) => {
    this.setState({
      inputText: event.target.value
    })
  };

  render() {

    let inputClassName = this.state.isActive ? 'new-item-input active' : 'new-item-input';
    let inputText = this.state.inputText;

    return (
      <div className="new-item">
        <button onClick={this.toggleActive} className='btn new-item-btn'>Add Task</button>
        <form onSubmit={this.addItem}>
          <input className={inputClassName} placeholder='Add new Item' onChange={this.inputChangeHandler} value={inputText} type="text"/>
        </form>
      </div>
    );
  }
}