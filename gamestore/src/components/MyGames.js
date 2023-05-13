import { useEffect, useState } from "react"
import GameCard from "./GameCard"
import { mygames  } from "./games"


export default function MyGames({}) {
    return (
    <>
    <h1>My Games</h1>
        {mygames.map(game =>(
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
        ))} 
    </>
    )
}
