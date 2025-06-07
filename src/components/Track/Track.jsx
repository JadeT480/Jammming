import React from 'react';

const Track = ({ track }) => {
  return (
    <div>
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
    </div>
  )
};

export default Track;