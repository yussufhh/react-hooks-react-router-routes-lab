import React from "react";
import { movies } from "../data";

const  Movies = () => {
  return <div>{/*{code here}*/}
    <h1>Movies Page</h1>
  {movies.map((movie, index)=>
  <div key={index}><h1>{movie.title}</h1><p>Time:{movie.time} minutes</p>
  <ul>
    {movie.genres.map((genre, index) =>(
      <li key={index}>{genre}</li>
    ))}
  </ul>
  </div>
  
  )}
  </div>;
}

export default Movies;
