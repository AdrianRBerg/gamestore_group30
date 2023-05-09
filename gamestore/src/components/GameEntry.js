
export default function GameEntry(prop) {
let game = prop.game
    return (
        <div class="container flex-item">
        <img src={game.img} class="image"></img>
        <div class="text">
        <h2 class="title">{game.title}</h2>
        <p>{game.genres[0]}</p>
        </div>
        </div>  );
}