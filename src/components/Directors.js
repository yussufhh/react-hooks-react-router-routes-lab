import React from 'react';
import { directors } from '../data';

const Directors = () => (
  <div>
    <h1>Directors Page</h1>
    {directors.map((director, index) => (
      <div key={index}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((movie, i) => (
            <li key={i}>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Directors;
