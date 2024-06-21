
import React from 'react';
import GreetingCard from './GreetingCard';
import './App.css';

const App = () => {
  const cards = [
    { greeting: 'Happy Birthday', name: 'John Doe' },
    { greeting: 'Congratulations', name: 'Jane Smith' },
    { greeting: 'Merry Christmas', name: 'Alice Johnson' },
    { greeting: 'Happy New Year', name: 'Bob Brown' }
  ];

  return (
    <div className="app">
      {cards.map((card, index) => (
        <GreetingCard key={index} greeting={card.greeting} name={card.name} />
      ))}
    </div>
  );
};

export default App;
