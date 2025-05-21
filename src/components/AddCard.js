import React,{useState} from 'react';
import CardList from './CardList';


// The AddCard component recieves cards and setCards as props from App.js
const AddCard = ({cards, setCards}) => {
    const [question, setQuestion] = useState('');       //local storage for question input
    const [answer, setAnswer] = useState('');          //local storage for answer input

    const handleSubmit = () => {
        if(answer==="" || question===""){
            alert("Answer or Question may not be set empty");      //give alert if any field is empty
            return;
        }
        else{
            const newCard = {question, answer};        // create an object for new card
            const updatedCards = [...cards, newCard];      //Add new card with old cards

            // Store new card in localStorage
            setCards(updatedCards);     //update the cards of App.js
            localStorage.setItem('flashcards', JSON.stringify(updatedCards));     //save cards to localstorage

            // clear inputs after submitiing
            setQuestion('');
            setAnswer('');
        }
    }

    return(
        <>
            <input className='form' type='text' value={question} placeholder='Enter your question' onChange={
                (e) => setQuestion(e.target.value)}></input><br></br>
            <input className='form' type='text' value={answer} placeholder='Enter your answer' onChange={
                (e) => setAnswer(e.target.value)}></input><br></br>
            <button className='form' onClick={handleSubmit}>submit</button>
        </>
    );
};
export default AddCard;