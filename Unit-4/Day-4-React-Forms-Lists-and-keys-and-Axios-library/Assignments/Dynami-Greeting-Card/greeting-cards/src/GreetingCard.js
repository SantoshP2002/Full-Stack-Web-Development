
import React from 'react';
import './GreetingCard.css';

const GreetingCard = ({ greeting, name }) => {
  return (
    <div className="card">
      <h2>{greeting}</h2>
      <p>{name}</p>
    </div>
  );
};

export default GreetingCard;
