import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({ tracks, onAdd }) => {
  return (
    <>
      <h2>Search Results</h2>
      <Tracklist tracks={tracks} onAdd={onAdd} />
    </>
  );
};

export default SearchResults;