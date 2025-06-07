import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="songTitle">Song Title: </label>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text" 
        name="songTitle" 
        placeholder="Enter song title"
      />
      <br />
      <button type="submit">Search for Song</button>
    </form>
  )
};

export default SearchBar;