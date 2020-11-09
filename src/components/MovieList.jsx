/* eslint-disable react/jsx-indent */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import MovieItem from './MovieItem';

const movies = [
  {
    id: 'tt0078748',
    title: 'Alien',
    director: 'Ridley Scott',
    release: '1979',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    id: 'tt0084787',
    title: 'The Thing',
    director: 'John Carpenter',
    release: '1982',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    id: 'tt0095016',
    title: 'Die Hard',
    director: 'John McTiernan',
    release: '1988',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
];

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      likes: 0,
    };
    this.handleFavouriteChange = this.handleFavouriteChange.bind(this);
    this.handleAllLikes = this.handleAllLikes.bind(this);
  }

  handleAllLikes() {
    const { likes } = this.state;
    this.setState({
      likes: likes + 1,
    });
  }

  handleFavouriteChange(id) {
    // trouver le film avec l'identifiant
    const favourite = movies.find((movie) => movie.id === id);

    // ajouter le film à la liste de mes favoris
    const { favourites } = this.state;
    if (favourites.includes(favourite)) {
      // le retirer
      this.setState({
        favourites: favourites.filter((movie) => movie !== favourite),
      });
    } else {
      favourites.push(favourite);
      this.setState({
        favourites,
      });
    }
  }

  render() {
    const { favourites, likes } = this.state;
    return (
      <section className="Movies">
        <div>{`Total like : ${likes}`}</div>
        <h3>My favourites:</h3>
        {favourites.length === 0
          ? 'No favourite yet'
          : favourites.map((favourite) => (
              <div key={favourite.id}>{favourite.title}</div>
            ))}
        <h3>All movies:</h3>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieItem
                {...movie}
                favourite={favourites.includes(movie)}
                handleFavouriteChange={this.handleFavouriteChange}
                handleAllLikes={this.handleAllLikes}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default MovieList;
