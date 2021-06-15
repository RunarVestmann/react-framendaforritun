import { useEffect, useState } from 'react';
import { getPrices } from './services/priceService';
import PriceList from './components/PriceList';
import EmojiInformation from './components/EmojiInformation';
import './styles/App.css';

const App = () => {
    const [prices, setPrices] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getPrices().then((data) => setPrices(data));
    }, []);

    return (
        <div id="container">
            <div id="top-row">
                <input onChange={(ev) => setSearch(ev.target.value)} type="text" />
                <EmojiInformation />
            </div>
            <PriceList prices={prices} search={search} />
        </div>
    );
};

export default App;
