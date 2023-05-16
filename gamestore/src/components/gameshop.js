import { useEffect, useState } from "react"
import Buy from "./buy"
import GameCard from "./GameCard"
import { store } from "./games"
<<<<<<< HEAD
export default function Gameshop({}) {
=======

export default function Gameshop({}) {
    
>>>>>>> c56e68acde1b57ebbb4568a598b90653b2fad95e
    return (
    <>
    <h1>Gameshop</h1>
        {store.map(game =>(
            <>
            <section key={game.id}>
            <GameCard
                name={game.title}
                image={game.img}
                genre={game.genres.join(', ')}
<<<<<<< HEAD
                link={`/game/${game.id}`}
=======
                link={`/game/${game.slug}`}
>>>>>>> c56e68acde1b57ebbb4568a598b90653b2fad95e
            />
            <Buy Link={game.link}/>
            </section>
            </> 
        ))} 
    </>
    )
}