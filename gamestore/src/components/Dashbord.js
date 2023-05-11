import React from 'react';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li><a href="/gameshop">Game Shop</a></li>
        <li><a href="/mygames">My Games</a></li>
        <li><a href="/favorites">My Favorites</a></li>
      </ul>
    </div>
  );
}

export default Dashboard;