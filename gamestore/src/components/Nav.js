import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavorites from './components/MyFavorites';

export default function App() {
  return (
    <Router>
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
              <Link to="/favorites">My Favorites</Link>
            </li>
          </ul>
        </nav>
    </Router>
    )
}
