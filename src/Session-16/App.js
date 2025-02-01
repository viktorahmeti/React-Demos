import React from 'react'
import Counter from './Counter'
import Toggle from './Toggle'
import Name from './Name'
import useIsDarkMode from './useIsDarkMode'
import './App.css'

function App() {
  const [isDarkMode, toggle] = useIsDarkMode();

  return <div className='Center-Content'>
    <button onClick={toggle}>{isDarkMode? 'dark' : 'light'}</button>
</div>
}

export default App