import React, { useEffect, useState } from 'react';
// import React from 'react';
import './Movies.css'

function Movies() {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Function to fetch data with custom headers
    const fetchData = async () => {
      try {
        const url = 'https://ott-details.p.rapidapi.com/advancedsearch'; // Replace with your API endpoint

        const headers = {
          'X-RapidAPI-Key': '05eb39e35bmshca5f55827ea88edp1484c7jsn3353a2ec33ef', // Example header with a token
          'X-RapidAPI-Host': 'ott-details.p.rapidapi.com', // Example content type header
        };

        const options = {
          method: 'GET', // You can use other HTTP methods like POST, PUT, DELETE, etc.
          headers: headers,
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
        // console.log(data['results'][0]["title"]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once on component mount
// console.log(data);
  return (
    <div className='movie'>
    {isLoading ? (
      <p>Loading...</p>
    ) : <>
    <img className='movie_img' src={data['results'][0]['imageurl']} />
    <h1 className='movie_title'>Title : <span>{data['results'][0]["title"]}</span></h1>
    <h2 className='movie_genre'>Genre : <span>{data['results'][0]['genre']}</span></h2>
    <h2 className='movie_dis'>Discribtion : <span>{data['results'][0]['synopsis']}</span></h2>
    </>
    }
  </div>
  );
}

export default Movies;