import { useState } from "react";

function useToggle(initialValue = false){
    const [value, setValue] = useState(initialValue)

    function toggle(){
        setValue(value => !value);
    }

    return [value, toggle];
}

export default useToggle;