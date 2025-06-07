import React from 'react';

import Tracklist from '../Tracklist/Tracklist';

const SearchResults = (props) => {
  const testTracks = [
    {
      id: 1,
      title: "Bleed Out",
      artist: "Within Temptation"
    },
    {
      id: 2,
      title: "Rise Again",
      artist: "Apocalyptica, Epica, Simone Simons"
    },
    {
      id: 3,
      title: "Up From the Bottom",
      artist: "Linkin Park"
    }
  ]

  return (
    <>
      <h2>Search Results</h2>
      <Tracklist tracks={testTracks}/>
    </>
  )
};

export default SearchResults;