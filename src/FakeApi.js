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

export const fetchAll = () => {
  return movies;
};

export const fetchOne = (id) => {
  return movies.find((movie) => movie.id === id);
};
