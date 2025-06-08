import React from 'react';

const Track = ({ track, onAdd, onRemove }) => {
  const addOrRemove = () => {
    if (onAdd) {
      return <button onClick={() => onAdd(track)}>+</button>
    } else if (onRemove) {
      return <button onClick={() => onRemove(track)}>-</button>
    }
    return null;
  };

  return (
    <div>
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
      <p>{track.album}</p>
      {addOrRemove()}
    </div>
  )
};

export default Track;