import React, { Component } from "react";
import './search-panel.scss';
import {SearchIcon} from "../icons";

export default class SearchPanel extends Component {

  state = {
    isFocus: false,
    inputText: ''
  };

  inputRef = React.createRef();
  labelRef = React.createRef();

  inputHandleChange = (event) => {
    this.setState({
      inputText: event.target.value
    });

    this.props.searchTextHandle(event.target.value);
  };

  inputHandleFocus = () => {
    this.labelRef.current.classList.add('active');
  };

  inputHandleBlur = (event) => {
    if (!event.target.value) this.labelRef.current.classList.remove('active');
  };

  render() {

    const { inputText } = this.state;

    return (
      <div className="search-panel">
        <SearchIcon classname='search-panel-icon'/>
        <label className='search-panel-label' ref={this.labelRef} htmlFor="search-panel-input">Search</label>
        <input onFocus={this.inputHandleFocus} onBlur={this.inputHandleBlur} onChange={this.inputHandleChange} ref={this.inputRef} id='search-panel-input' value={inputText} className='search-panel-input' type="text"/>
      </div>
    );
  }
}