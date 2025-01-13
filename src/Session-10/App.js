import './App.css';
import Code from './components/Code/Code';
import Counter from './components/Counter/Counter';

function App(){
    function onCode(code){
        if (code == '111222'){
            console.log('Correct');
        }
        else{
            console.log('Incorrect');
        }
    }

    return <div className='Center-Content'>
        <Code onFinish={onCode}></Code>
    </div>
}

export default App;