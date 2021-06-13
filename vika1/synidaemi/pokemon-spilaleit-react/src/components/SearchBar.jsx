import { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [name, setName] = useState('');
    return (
        <div id="search-bar">
            <input onChange={(ev) => setName(ev.target.value)} type="text" id="search-input" />
            <button onClick={() => onSearch(name)} type="button">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
