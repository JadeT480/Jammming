import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({ tracks }) => {
  return (
    <>
      <h2>Search Results</h2>
      <Tracklist tracks={tracks} />
    </>
  );
};

export default SearchResults;