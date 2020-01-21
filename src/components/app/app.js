import React, {Component} from 'react';
import './app.scss'
import Header from "../header";
import SearchPanel from "../search-panel";
import Main from "../main/main";


export default class App extends Component {

  state = {
    searchText: ''
  };

  searchTextHandle = (text) => {
    this.setState({
      searchText: text
    })
  };

  render() {
    return (
      <div className='app'>
        <div className="container">
          <Header/>
          <SearchPanel searchTextHandle={this.searchTextHandle}/>
          <Main searchText={this.state.searchText}/>
        </div>
      </div>
    );
  }
}
