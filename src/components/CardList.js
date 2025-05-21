import React,{useState} from 'react';

// The CardList component recieves the cards prop from App.js
const CardList = ({cards, setCards, currentIndex, setCurrentIndex}) => {

    const handleDelete = () => {
        const remainingCards = cards.filter((_, index) => index !== currentIndex);         //(_) => means we’re not using the actual card here, just the index.    
        setCards(remainingCards);      //now cards have deleted the currentIndex
        localStorage.setItem('flashcards', JSON.stringify(remainingCards));

        //Adjust index after deletion
        if(currentIndex >= remainingCards.length){
            setCurrentIndex(Math.max(remainingCards.length-1,0));
        }
    }

    const [isVisible, setIsVisible] = useState(true);

    const handleShow = () => {
        setIsVisible(c => !c);
    }

    return (
        <>
            <h2>Flashcards</h2>
            {/*JSX does not support if else statement so we use ternary operator*/}
            {cards.length===0?(
                <p>No card is available</p>
            ):(
                <div className='card'>
                    {/*strong is replacement of b in HTML. ReactJS developers use this*/}
                    <p><strong>Q:</strong>{cards[currentIndex].question}</p>
                    <p style={{visibility:isVisible?"visible":"hidden"}}><strong>A:</strong>{cards[currentIndex].answer}</p>
                    <button onClick={() => setCurrentIndex((e) => Math.max(e - 1, 0))}>prev</button>
                    <button onClick={handleDelete}>delete</button>
                    <button onClick={handleShow}>{isVisible?"hide":"show"}</button>
                    <button onClick={() => setCurrentIndex((e) => e+1>=cards.length?e:e+1)}>next</button><br></br>
                </div>
                )
            }
        </>
    );
};
export default CardList;
