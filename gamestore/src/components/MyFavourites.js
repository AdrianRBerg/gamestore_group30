import { useEffect, useState } from "react"
import GameCard from "./GameCard"
import { mygames  } from "./games"


export default function MyFavourites({}) {
    return (
    <>
    <h1>My Games</h1>
        {mygames.map(game =>{
            if(game.fav == true){
              <>
              <section key={game.id}>
              <GameCard
                  name={game.title}
                  image={game.img}
                  genre={game.genres.join(', ')}
                  link={`/game/${game.id}`}
              />
              </section>
            </>
            }
        })} 
        </>
    )
}