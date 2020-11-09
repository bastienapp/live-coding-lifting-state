import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAll } from '../FakeApi';

function MovieList() {
  const movies = fetchAll();
  return (
    <section className="Movies">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;
