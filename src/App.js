import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AddCard from './components/AddCard';
import CardList from './components/CardList';

function App() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('flashcards')) || [];
    setCards(storedCards);
  }, []);

  return (
    <div className="App">
      <AddCard cards={cards} setCards={setCards} />      {/*cards and setCards are props*/}
      <CardList cards={cards} setCards={setCards} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />       {/*cards is prop*/}
      {/*above two lines are concept of lifting state up*/}
    </div>
  );
}

export default App;
