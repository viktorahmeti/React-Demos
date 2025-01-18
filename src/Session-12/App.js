import './App.css';
import React, { useEffect, useState } from 'react'
import Quiz from './components/Quiz/Quiz';

function App() {
    const [questions, setQuestions] = useState([]);
    const [quiz, setQuiz] = useState(1);
    
    useEffect(() => {
        fetch(`http://10.10.32.38:8085/quiz/${quiz}`)
        .then(res => res.json())
        .then(res => {
        setQuestions(res.data.questions)
        })
    }, [quiz])

    return (
        <div className='Center-Content'>
            <Quiz quiz={quiz} questions={questions} onNext={() => setQuiz(quiz => quiz + 1)}></Quiz>
        </div>
    )
}

export default App