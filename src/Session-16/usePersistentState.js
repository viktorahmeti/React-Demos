import { useState, useEffect } from "react";

function usePersistentState(key, initialValue){
    const [value, setValue] = useState(() => {
        let stored = localStorage.getItem(key);
        
        if (stored){
            return JSON.parse(stored)
        }
        else {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export default usePersistentState;