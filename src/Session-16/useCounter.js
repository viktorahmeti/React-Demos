import { useState } from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue = 0);

    function increment(){
        setCount(count => count + 1);
    }

    function decrement(){
        setCount(count => count - 1);
    }
    return {count, increment, decrement};
}

export default useCounter;