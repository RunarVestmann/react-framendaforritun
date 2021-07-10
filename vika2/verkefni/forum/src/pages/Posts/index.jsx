import { useContext } from 'react';
import { GoPlus } from 'react-icons/go';
import { useHistory } from 'react-router';
import PostContext from '../../context/PostContext';
import PostThumbnail from '../../components/PostThumbnail';
import styles from './style.module.css';

const Posts = () => {
    const history = useHistory();
    const { posts } = useContext(PostContext);
    return (
        <div className={styles.container}>
            <div className={styles.postContainer}>
                <GoPlus className={styles.button} onClick={() => history.push('/create-post')} />
                {posts.map((post) => (
                    <PostThumbnail key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
