import React from 'react';
import PropTypes from 'prop-types';
import { fetchOne } from '../FakeApi';
import './Movie.css';

function MovieItem(props) {
  // props.match.params.imdbId
  const {
    match: {
      params: { imdbId },
    },
  } = props;
  const { release, title, director, poster } = fetchOne(imdbId);
  return (
    <article className="Movie">
      <h2>{`${title} (${release})`}</h2>
      <h3>{director}</h3>
      <div>{imdbId}</div>
      <img src={poster} alt={title} />
    </article>
  );
}

MovieItem.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieItem;
