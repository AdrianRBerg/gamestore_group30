import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import GameShop from './gameshop';
import MyGames from './MyGames';
import MyFavorites from './MyFavourites';

export default function App() {
  return (
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/gameshop">Game Shop</Link>
            </li>
            <li>
              <Link to="/mygames">My Games</Link>
            </li>
            <li>
              <Link to="/favourites">My Favourites</Link>
            </li>
          </ul>
        </nav>
    )
}
