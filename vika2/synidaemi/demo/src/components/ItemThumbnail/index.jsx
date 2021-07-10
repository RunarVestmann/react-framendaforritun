import { useHistory } from 'react-router';
import styles from './style.module.css';

const ItemThumbnail = ({ id, name }) => {
    const history = useHistory();
    return (
        <div className={styles.container} onClick={() => history.push(`/items/${id}`)}>
            <p>{name}</p>
        </div>
    );
};

export default ItemThumbnail;
