import React, { useState } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

function App() {
  // Deals with searching and search results
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (term) => {
    Spotify.search(term).then(results => {
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

  const savePlaylist = () => {
  const trackUris = playlistTracks.map(track => track.uri);
  Spotify.savePlaylist(playlistName, trackUris).then(() => {
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  });
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
