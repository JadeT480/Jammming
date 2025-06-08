import React from "react";

import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ tracks, onRemove }) => {
  return (
    <>
      <h2>Playlist</h2>
      <Tracklist tracks={tracks} onRemove={onRemove} />
    </>
  );
};

export default Playlist;
