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