import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import MovieList from './components/MovieList';
import './App.css';
import './components/NavBar.css';
import NavBar from './components/NavBar';
import MovieItem from './components/MovieItem';

function App() {
  return (
    <Router>
      <main className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <MovieList />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
          <Route exact path="/movies/:imdbId" component={MovieItem} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
