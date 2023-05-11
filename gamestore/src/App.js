import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MyGames from './components/MyGames';
import MyFavorites from './components/MyFavorites';
import GameShop from './components/GameShop';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Dashboard</a></li>
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