import React from "react";

import Track from "../Track/Track";

const Tracklist = ({ tracks, onAdd, onRemove }) => {
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Tracklist;
