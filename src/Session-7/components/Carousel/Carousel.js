import { useState } from 'react';
import './Carousel.css';

function Carousel({images}){
    const [index, setIndex] = useState(0);

    function increment(){
        setIndex(index => index + 1);
    }

    function decrement(){
        setIndex(index => index - 1);
    }

    return <div className='Carousel'>
        <button disabled={index == 0} onClick={decrement}>&lt;</button>
        <img src={images[index]} />
        <button disabled={index == images.length - 1} onClick={increment}>&gt;</button>
    </div>
}

export default Carousel;