import React, { use, useState } from "react";
import "./App.css";

// import components as they are created
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  // Deals with searching and search results
  const [searchResults, setSearchResults] = useState([]);
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

  // Deals with playlists, adding and removing tracks
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const addTrack = (track) => {
    if (!playlistTracks.find((song) => song.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((song) => song.id !== track.id));
  };

  const savePlaylist = () => {
    console.log("Saving your playlist...");
    console.log("Your playlist name is: ", playlistName);
    console.log("Saved Tracks: ", playlistTracks);
    // Reset the playlist once the user has saved
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  // Deals with setting playlist name
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const handlePlaylistNameChange = (name) => {
    setPlaylistName(name);
  };

  return (
    <>
      <h1>Jammming!</h1>
      <div>
        <SearchBar onSearch={handleSearch} />
        <SearchResults tracks={searchResults} onAdd={addTrack} />
        <Playlist
          tracks={playlistTracks}
          onRemove={removeTrack}
          name={playlistName}
          onPlaylistNameChange={handlePlaylistNameChange}
          onSavePlaylist={savePlaylist}
        />
      </div>
    </>
  );
}

export default App;
