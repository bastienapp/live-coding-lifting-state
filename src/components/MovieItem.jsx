/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    const { favourite } = props;
    this.state = {
      favourite,
      like: 0,
    };
    this.handleFavourite = this.handleFavourite.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleFavourite() {
    const { favourite } = this.state;
    const { handleFavouriteChange, id } = this.props;
    this.setState({
      favourite: !favourite,
    });
    handleFavouriteChange(id);
  }

  handleLike() {
    const { like } = this.state;
    const { handleAllLikes } = this.props;
    handleAllLikes();
    this.setState({
      like: like + 1,
    });
  }

  render() {
    const { id, release, title, director, poster } = this.props;
    const { favourite, like } = this.state;
    return (
      <article className="Movie">
        <h2>{`${title} (${release})`}</h2>
        <h3>{director}</h3>
        <div>{id}</div>
        <img src={poster} alt={title} />
        <br />
        <button type="button" onClick={this.handleFavourite}>
          {favourite ? 'Remove from favourite' : 'Add to favourite'}
        </button>
        <button type="button" onClick={this.handleLike}>
          {`Like (${like})`}
        </button>
        <br />
      </article>
    );
  }
}

MovieItem.propTypes = {
  id: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  handleFavouriteChange: PropTypes.func.isRequired,
  handleAllLikes: PropTypes.func.isRequired,
  favourite: PropTypes.bool.isRequired,
};

export default MovieItem;
