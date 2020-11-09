import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
