import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

function App({sessions}) {
  return (
    <ul className='Sessions-List'>
        {
            sessions.map(s => <li><Link to={`/session-${s[0]}`}>Session {s[0]}</Link></li>)
        }
    </ul>
  )
}

export default App