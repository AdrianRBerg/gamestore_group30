import React, { useState } from 'react';
import { FavouriteGames } from './FavouriteGames';


const games = [];

function MyFavorites() {
  const [favourites, setFavourites] = useState([]);

  function addToFavourites(game) {
    setFavourites([...favourites, game]);
  }

  function GameDisplay(props) {
    const { game } = props;

    function handleAddToFavourites() {
      addToFavourites(game);
    }

    return (
      <div>
        <h2>{game.title}</h2>
        <p>{game.description}</p>
        <button onClick={handleAddToFavourites}>Add to favourites</button>
      </div>
    );
  }


export default MyFavorites;
