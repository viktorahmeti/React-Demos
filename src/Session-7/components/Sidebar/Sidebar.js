import { useState } from 'react';
import './Sidebar.css';

function Sidebar(){
    const [open, setOpen] = useState(false);

    function toggle(){
        setOpen(open => !open);
    }

    return <>
        <button onClick={toggle}>Toggle</button>
        <div className={`Sidebar ${open? 'hide' : ''}`}></div>
    </>
}

export default Sidebar;