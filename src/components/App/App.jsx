import React, { use, useState } from "react";
import "./App.css";

// import components as they are created
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleSearch = (term) => {
    // testing, using mock results based on term.
    const mockResults = [
      { id: 1, title: `Search result for ${term} 1`, artist: "Artist A" },
      { id: 2, title: `Search result for ${term} 2`, artist: "Artist B" },
    ];
    setSearchResults(mockResults);
  };

  return (
    <>
      <h1>Jammming!</h1>
      <div>
        <SearchBar onSearch={handleSearch} />
        <SearchResults tracks={searchResults} />
        <p>Playlist component</p>
      </div>
    </>
  );
}

export default App;