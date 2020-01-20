import React from 'react';
import './app.scss'
import Header from "../header";
import SearchPanel from "../search-panel";
import Main from "../main/main";


function App() {
  return (
    <div className='app'>
      <div className="container">
        <Header/>
        <SearchPanel/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
