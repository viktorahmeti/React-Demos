import React, { useEffect, useState, useRef } from 'react'
import './Code.css';

function Code({onFinish}) {
    const [code, setCode] = useState('');
    const container = useRef(null);
    const codeLength = 6;

    useEffect(() => {
        if(code.length < codeLength)
            container.current.querySelectorAll('input')[code.length].focus();
        else if (code.length == codeLength){
            onFinish(code);
        }
    }, [code]);

    function onKey(e){
        if(e.key == 'Backspace'){
            if (code.length == 0)
                return;

            setCode(code => code.substring(0, code.length - 1));
        }
        else if(!isNaN(e.key) && code.length < codeLength){
            setCode(code => code + e.key);
        }
    }

    return <div ref={container} className='Code-Container' onKeyDown={onKey}>
        {(new Array(codeLength)).fill('').map((_, i) => <input key={i} readOnly={true} className='Code-Digit' value={code[i] || ''}></input>)}
    </div>
}

export default Code;