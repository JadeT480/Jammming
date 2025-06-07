import React from 'react';
import './App.css';

// import components as they are created
import SearchBar from "../SearchBar/SearchBar";

function App() {
 return (
 <>
  <h1>Jammming!</h1>
  <div>
    <SearchBar />
    <p>SearchResults component</p>
    <p>Playlist component</p>
  </div>
 </>
 )
};

export default App;