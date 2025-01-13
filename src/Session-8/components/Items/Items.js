import { useState } from 'react';
import './Items.css';

function Items(){
    let [items, setItems] = useState([]);
    let [inputText, setInputText] = useState('');
    let [searchText, setSearchText] = useState('');

    function updateInputText(e){
        setInputText(e.target.value);
    }

    function updateSearchText(e){
        setSearchText(e.target.value);
    }

    function addItem(){
        setItems([...items, inputText]);
        setInputText('');
    }

    function deleteItem(index){
        setItems(items.filter((_, i) => i !== index));
    }

    return <div>
        {/* <input value={searchText} onInput={updateSearchText} type='text' placeholder='Search' /><br></br> */}
        <input value={inputText} onInput={updateInputText} type='text' placeholder='Item' />
        <button onClick={addItem}>Add</button>
        <ol>
        {
            items
            // .filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
            .map((item, i) => <li>{item} <button onClick={() => deleteItem(i)}>X</button></li>)
        }
        </ol>
    </div>;
}

export default Items;