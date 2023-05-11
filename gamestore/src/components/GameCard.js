export default function GameCard({name, image, genre}) { 
    return (
      <article className="game-card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>Genre: {genre}</p>
      </article>
    )
  }
