import React, { useState, useEffect } from "react";
import axios from "axios";

const FullMovie = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = "YOUR_RAPIDAPI_KEY";
  const API_ENDPOINT = "YOUR_API_ENDPOINT"; // Replace with the actual API endpoint

  useEffect(() => {
    axios
      .get(API_ENDPOINT, {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.image_url} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default FullMovie;