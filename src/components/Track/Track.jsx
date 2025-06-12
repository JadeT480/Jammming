import React from "react";
import styles from "./Track.module.css";

const Track = ({ track, onAdd, onRemove }) => {
  const addOrRemove = () => {
    if (onAdd) {
      return <button className={styles.TrackAction} onClick={() => onAdd(track)}>+</button>;
    } else if (onRemove) {
      return <button className={styles.TrackAction} onClick={() => onRemove(track)}>-</button>;
    }
    return null;
  };

  return (
    <div className={styles.Track}>
      <div className={styles.TrackInfo}>
        <h3>{track.name}</h3>
        <p>{track.artist}</p>
        <p>{track.album}</p>
      </div>
      {addOrRemove()}
    </div>
  );
};

export default Track;
