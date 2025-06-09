import React from "react";

import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ tracks, onRemove, name, onPlaylistNameChange, onSavePlaylist }) => {
  return (
    <>
      <input
        value={name}
        onChange={(e) => onPlaylistNameChange(e.target.value)}
        type="text"
      />
      <Tracklist tracks={tracks} onRemove={onRemove} />
      <button onClick={onSavePlaylist}>Save Playlist to Spotify</button>
    </>
  );
};

export default Playlist;
