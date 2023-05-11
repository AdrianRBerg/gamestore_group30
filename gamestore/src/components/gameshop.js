import { useEffect, useState } from "react"
import Buy from "./buy"
import GameCard from "./GameCard"
import { store } from "./games"
export default function Gameshop({}) {
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
            />
            <Buy Link={game.link}/>
            </section>
            </> 
        ))} 
    </>
    )
}