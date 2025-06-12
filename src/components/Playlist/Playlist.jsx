import React from "react";
import styles from "./Playlist.module.css";

import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ tracks, onRemove, name, onPlaylistNameChange, onSavePlaylist, message }) => {
  return (
    <div className={styles.Playlist}>
      <input
        value={name}
        onChange={(e) => onPlaylistNameChange(e.target.value)}
        type="text"
      />
      <br />
      <Tracklist tracks={tracks} onRemove={onRemove} />
      {message && <span className={styles.Message}>{message}</span>}
      <button className={styles.SavePlaylist} onClick={onSavePlaylist}>Save Playlist to Deezer</button>
    </div>
  );
};

export default Playlist;
