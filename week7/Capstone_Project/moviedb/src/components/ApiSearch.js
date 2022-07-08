import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "./Search";
import Results from "./Results";
import Popup from "./Popup";

function ApiSearch() {
  const [state, setState] = useState({
    s: "Pokemon",
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?apikey=f15af5af";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };
  useEffect(() => {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = data.Search;

      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  }, []);
  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <main>
      <Search handleInput={handleInput} search={search} />

      <Results results={state.results} openPopup={openPopup} />

      {typeof state.selected.Title != "undefined" ? (
        <Popup selected={state.selected} closePopup={closePopup} />
      ) : (
        false
      )}
    </main>
  );
}

export default ApiSearch;
