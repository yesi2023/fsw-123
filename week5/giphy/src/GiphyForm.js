import { useState, useEffect } from "react";

function GiphyForm() {
  const [search, setSearch] = useState("bear");
  const [imgSrc, setImgSrc] = useState([]);
  const [alt, setAlt] = useState([]);

  const API = "PJFIwJcbDVy1N3uastfg500TFJBJDYRk";
  const URL = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API}`;

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=bear&api_key=${API}`)
      .then((response) => response.json())
      .then((data) => {
        setImgSrc(data.data[0].images.original.url);
        setAlt(data.data[0].title)
        //.catch((error) => console.log(error));
      });
  }, []);

  const obtainImage = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setImgSrc(data.data[0].images.original.url);
        setAlt(data.data[0].title).catch((error) => console.log(error));
      });
  };

  const handleClick = (event) => {
    event.preventDefault();
    obtainImage();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form name="SearchForm" className="giphyform">
      <label className="subtitle">Enter a word of phrase: </label>
      <input
        type="text"
        name="search-items"
        id="search-items"
        value={search}
        onChange={handleChange}
        className="input"
      ></input>
      <button onClick={handleClick} className="search-button">
        Search
      </button>
      <div className="imageContainer">
        {imgSrc && <img src={imgSrc} alt={alt} />}
      </div>
    </form>
  );
}

export default GiphyForm;
