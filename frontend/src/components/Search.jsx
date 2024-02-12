import React from "react";
import "./Search.css";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Here..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default Search;
