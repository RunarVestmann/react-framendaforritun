import { useHistory } from 'react-router-dom';
import styles from './style.module.css';

const PostThumbnail = ({ id, author, description, title }) => {
    const history = useHistory();
    return (
        <div onClick={() => history.push(`/posts/${id}`)} className={styles.container}>
            <h2>{title}</h2>
            <p>Posted by {author}</p>
        </div>
    );
};

export default PostThumbnail;
