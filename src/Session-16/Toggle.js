import React from 'react'
import useToggle from './useToggle'

function Toggle() {
    const [value, toggle] = useToggle(false);

    return (
        <button style={{backgroundColor: `${value? 'yellowgreen' : 'darkred'}`}} onClick={toggle}>Toggle</button>
    )
}

export default Toggle