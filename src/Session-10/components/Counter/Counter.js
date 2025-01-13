import { useEffect, useState } from 'react';
import './Counter.css';

function Counter(){
    const [running, setRunning] = useState(false);
    const [counter, setCounter] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);

    useEffect(() => {
        if (fullscreen){
            document.body.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
    }, [fullscreen])

    useEffect(() => {
        if(!running)
            return;
        
        let interval = setInterval(() => setCounter(counter => counter + 1), 1000);

        return () => clearInterval(interval);
    }, [running]);

    return <div className='Counter-Container'>
        <h2>{counter}</h2>
        <button className='Counter-Toggle' onClick={() => setRunning(running => !running)}>{running? 'STOP' : 'START'}</button>
        <button onClick={() => setFullscreen(f => !f)}>Toggle Fullscreen</button>
    </div>
}

export default Counter;