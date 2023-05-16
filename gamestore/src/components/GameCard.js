export default function GameCard({name, image, genre, link}) { 
    return (
      <article className="gamecard">
        <a href={link}>
        <img src={image} alt={name}/>
        </a>
        <h2>{name}</h2>
        <p>Genre: {genre}</p>
      </article>
    )
  }
