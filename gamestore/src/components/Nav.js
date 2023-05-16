import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import GameShop from './gameshop';
import MyGames from './MyGames';
import MyFavorites from './MyFavourites';
import logo from '../bilde/macslogo_black'

export default function Nav() {
  return (
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src={logo} alt="home"/>
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
