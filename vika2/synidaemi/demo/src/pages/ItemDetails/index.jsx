import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ItemContext from '../../context/ItemContext';
import { Redirect } from 'react-router';
import Button from '../../components/Button';

const ItemDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const { items, setItems } = useContext(ItemContext);
    const item = items.find((item) => item.id === id);
    if (!item) return <Redirect to="/notfound" />;
    return (
        <div>
            Item with id: {id} and name: {item.name}
            <Button
                onClick={() => {
                    setItems(items.filter((item) => item.id !== id));
                    history.push('/items');
                }}
                style={{ backgroundColor: 'red', marginLeft: '1rem' }}
            >
                Delete
            </Button>
        </div>
    );
};

export default ItemDetails;
