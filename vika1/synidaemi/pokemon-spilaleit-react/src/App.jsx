import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import { getCards } from './services/pokemonService';
import './styles/App.css';
import { useState } from 'react';

function App() {
    const [cards, setCards] = useState([]);

    const handleSearch = async (name) => {
        const updatedCards = await getCards(name);
        setCards(updatedCards);
    };

    return (
        <div id="main-container">
            <SearchBar onSearch={handleSearch} />
            <CardList cards={cards} />
        </div>
    );
}

export default App;
