import { useState } from 'react';
import './ButtonList.css';
import Button from '../Button/Button'

function ButtonList(){
    const [count, setCount] = useState(1);

    function increment(){
        setCount(c => c + 1);
    }

    function decrement(){
        setCount(c => c - 1);
    }

    return <div className='ButtonList'>
        <Button count={count} increment={increment} decrement={decrement}></Button>
        <Button count={count} increment={increment} decrement={decrement}></Button>
        <Button count={count} increment={increment} decrement={decrement}></Button>
    </div>
}

export default ButtonList;