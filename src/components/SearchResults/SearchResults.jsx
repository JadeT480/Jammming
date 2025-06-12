import React from "react";
import styles from "./SearchResults.module.css";

import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({ tracks, onAdd }) => {
  return (
    <div className={styles.SearchResults}>
      <h2>Search Results</h2>
      <Tracklist tracks={tracks} onAdd={onAdd} />
    </div>
  );
};

export default SearchResults;