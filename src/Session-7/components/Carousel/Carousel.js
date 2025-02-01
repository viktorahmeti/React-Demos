import { useState } from 'react';
import './Carousel.css';
import useCounter from '../../../Session-16/useCounter';

function Carousel({images}){
    const {count, increment, decrement} = useCounter();

    return <div className='Carousel'>
        <button disabled={count == 0} onClick={decrement}>&lt;</button>
        <img src={images[count]} />
        <button disabled={count == images.length - 1} onClick={increment}>&gt;</button>
    </div>
}

export default Carousel;