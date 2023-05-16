<<<<<<< HEAD
import {store, mygames} from "../games"
import GameEntry from "./GameEntry"
export default function MyGames() {
    mygames.forEach(game => console.log(game))

    let entries = [];

    mygames.forEach(game => {
        entries.push(<GameEntry game={game} />)        
    });

    return (
        <div class="flex-container"> {entries} </div>
    )
}   
=======
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
                link={`/game/${game.slug}`}
            />
            </section>
            </> 
        ))} 
    </>
    )
}
>>>>>>> c56e68acde1b57ebbb4568a598b90653b2fad95e
