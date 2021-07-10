import { useContext, useState } from 'react';
import ItemContext from '../../context/ItemContext';
import Input from '../../components/Input';
import { GoPlus } from 'react-icons/go';
import { createItem } from '../../utils/localStorageUtils';
import ItemThumbnail from '../../components/ItemThumbnail';
import styles from './style.module.css';

const Items = () => {
    const [itemName, setItemName] = useState('');
    const { items, setItems } = useContext(ItemContext);
    return (
        <div className={styles.container}>
            <Input label="Item name" onChange={(ev) => setItemName(ev.target.value)} />
            <GoPlus
                onClick={() => setItems(items.concat(createItem({ name: itemName || 'New item' })))}
                className={styles.icon}
            />
            <div className={styles.itemContainer}>
                {items.map((item) => (
                    <ItemThumbnail key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Items;
