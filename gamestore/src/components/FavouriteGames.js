
const games = [
    {
      id: 1,
      title: '.',
      description: '.'
    },
    {
      id: 2,
      title: '.',
      description: '.'
    },
    {
      id: 3,
      title: '.',
      description: '.'
    }
  ];

  return (
    <div>
      <h1>My favourite games</h1>
      {games.map(game => (
        <GameDisplay key={game.id} game={game} />
      ))}
      <FavouriteGames favourites={favourites} />
    </div>
  );