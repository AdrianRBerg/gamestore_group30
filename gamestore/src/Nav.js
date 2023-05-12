import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavorites from './components/MyFavorites';

function App() {
  return (
    <Router>
      <div>
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

        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/gameshop">
            <GameShop />
          </Route>
          <Route path="/mygames">
            <MyGames />
          </Route>
          <Route path="/favorites">
            <MyFavorites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;