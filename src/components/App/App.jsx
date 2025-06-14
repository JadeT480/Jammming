import React, { useState } from "react";
import styles from "./App.module.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Deezer from "../../util/Deezer";

function App() {
  // Deals with searching and search results
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (term) => {
    Deezer.search(term).then((results) => {
      setSearchResults(results);
    });
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

  const [message, setMessage] = useState("");
  const savePlaylist = () => {
    // Show the message that saving is not supported
    setMessage("Sorry, saving playlists is not supported with Deezer.");

    // Clear message after a few seconds (optional)
    setTimeout(() => setMessage(""), 4000);

    // Optionally clear playlist name and tracks if you want
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  // Deals with setting playlist name
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const handlePlaylistNameChange = (name) => {
    setPlaylistName(name);
  };

  return (
    <div>
      <h1>Jammming!</h1>
      <div className={styles.App}>
        <SearchBar onSearch={handleSearch} />
        <div className={styles.AppPlaylist}>
          <SearchResults tracks={searchResults} onAdd={addTrack} />
          <Playlist
            tracks={playlistTracks}
            onRemove={removeTrack}
            name={playlistName}
            onPlaylistNameChange={handlePlaylistNameChange}
            onSavePlaylist={savePlaylist}
            message={message}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
