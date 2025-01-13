import { useState } from 'react';
import './CharacterCounter.css';

function CharacterCounter(){
    const [counter, setCounter] = useState(0);

    function updateCounter(e){
        setCounter(e.target.value.length);
    }

    return <div className='CharacterCounter'>
        <input onChange={updateCounter} className='input' type='text' />
        <span className='counter'>{counter}</span>
    </div>
}

export default CharacterCounter;