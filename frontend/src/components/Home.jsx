import React, { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Card from "./Card";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar />
      <Search onSearch={handleSearch} />
      <Card searchTerm={searchTerm} />
    </>
  );
};

export default Home;
