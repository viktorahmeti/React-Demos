import './App.css';
import React, { useEffect, useState } from 'react'
import Quiz from './components/Quiz/Quiz';
import { mockFetch } from './utils/utils';

function App() {
    const [questions, setQuestions] = useState([]);
    const [quiz, setQuiz] = useState(1);
    
    useEffect(() => {
        mockFetch(`quiz/${quiz}`)
        .then(res => res.json())
        .then(res => setQuestions(res));
    }, [quiz])

    return (
        <div className='Center-Content'>
            <Quiz quiz={quiz} questions={questions} onNext={() => setQuiz(quiz => quiz + 1)}></Quiz>
        </div>
    )
}

export default App