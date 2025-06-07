import React from 'react';
import './App.css';

// import components as they are created
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from '../SearchResults/SearchResults';

function App() {
 return (
 <>
  <h1>Jammming!</h1>
  <div>
    <SearchBar />
    <SearchResults />
    <p>Playlist component</p>
  </div>
 </>
 )
};

export default App;