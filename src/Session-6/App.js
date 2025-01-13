import { useState } from 'react';
import './App.css';
import ButtonList from './components/ButtonList/ButtonList';

function App() {
  let [loading, setLoading] = useState(true);

  setTimeout(() => {
      setLoading(false)
  }, 1000);

  return (
    <div className='App'>
      {
        loading? 
        <img className='loader' src='./logo512.png' /> : 
        <ButtonList></ButtonList>
      }
    </div>
  );
}

export default App;
