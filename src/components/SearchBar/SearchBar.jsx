import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({onSearch}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.SearchBar}>
      <label htmlFor="songTitle">Song Title: </label>
      <br />
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text" 
        name="songTitle" 
        placeholder="Enter song title"
      />
      <br />
      <button className={styles.SearchButton} type="submit">Search for Song</button>
    </form>
  )
};

export default SearchBar;