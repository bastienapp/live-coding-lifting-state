import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function MovieItem(props) {
  const { id, release, title, director, poster } = props;
  return (
    <article className="Movie">
      <h2>{`${title} (${release})`}</h2>
      <h3>{director}</h3>
      <div>{id}</div>
      <img src={poster} alt={title} />
      <br />
      <button type="button">Add to favourite</button>
      <br />
    </article>
  );
}

MovieItem.propTypes = {
  id: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieItem;
