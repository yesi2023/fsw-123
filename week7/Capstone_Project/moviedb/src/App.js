//import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ApiSearch from "./components/ApiSearch";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Movie Search</h1>

        <Link to="/search">ApiSearch</Link>
        <Link to="/"> Home</Link>
        <Link to="/contact"> Contact</Link>
      </header>

      <main>
        <Routes>
          <Route path="/search" element={<ApiSearch />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
