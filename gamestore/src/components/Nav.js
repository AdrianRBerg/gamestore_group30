import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/gameshop">GameShop</Link>
            </li>
            <li>
              <Link to="/mygames">MyGames</Link>
            </li>
            <li>
              <Link to="/favourites">Favorites</Link>
            </li>
          </ul>
        </nav>
    )
}
