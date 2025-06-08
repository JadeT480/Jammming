import React, { use, useState } from "react";
import "./App.css";

// import components as they are created
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleSearch = (term) => {
    // testing, using mock results based on term.
    const mockResults = [
      {
        id: 1,
        title: `Search result for ${term} 1`,
        artist: "Artist A",
        album: "Album A",
      },
      {
        id: 2,
        title: `Search result for ${term} 2`,
        artist: "Artist B",
        album: "Album B",
      },
    ];
    setSearchResults(mockResults);
  };

  const addTrack = (track) => {
    if (!playlistTracks.find((song) => song.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((song) => song.id !== track.id));
  };

  return (
    <>
      <h1>Jammming!</h1>
      <div>
        <SearchBar onSearch={handleSearch} />
        <SearchResults tracks={searchResults} onAdd={addTrack} />
        <Playlist tracks={playlistTracks} onRemove={removeTrack} />
      </div>
    </>
  );
}

export default App;
