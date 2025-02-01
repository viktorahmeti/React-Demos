import React from 'react'
import useCounter from './useCounter';

function Counter() {
    const {count, increment, decrement} = useCounter();

    return (
        <button onClick={increment} style={{fontSize: '3rem'}}>{count}</button>
    )
}

export default Counter