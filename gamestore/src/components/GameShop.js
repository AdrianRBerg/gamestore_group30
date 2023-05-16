import { useEffect, useState } from "react"
import Buy from "./buy"
import GameCard from "./GameCard"
import { store } from "./games"
import Nav from './Nav'

export default function Gameshop({}) {
    
    return (
    <>
    <h1>Gameshop</h1>
    <Nav/>
    <h2>For Sale</h2>
        {store.map(game =>(
            <>
            <section className="card" key={game.id}>
            <GameCard
                name={game.title}
                image={game.img}
                genre={game.genres.join(', ')}
                link={`/game/${game.slug}`}
            />
            <Buy Link={game.link}/>
            </section>
            </> 
        ))} 
    </>
    )
}