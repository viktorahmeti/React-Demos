import { useEffect, useState } from "react";
import usePersistentState from "./usePersistentState";

function useIsDarkMode(initialValue = false){
    const [isDarkMode, setIsDarkMode] = usePersistentState('isDarkMode', initialValue);

    function toggle(){
        setIsDarkMode(isDarkMode => !isDarkMode);
    }

    useEffect(() => {
        var r = document.querySelector(':root');
        
        if (isDarkMode){
            r.style.setProperty('--background-color', 'black');
            r.style.setProperty('--text-color', 'white');
        }
        else{
            r.style.setProperty('--background-color', 'white');
            r.style.setProperty('--text-color', 'black');
        }
    }, [isDarkMode])

    return [isDarkMode, toggle];
}

export default useIsDarkMode;