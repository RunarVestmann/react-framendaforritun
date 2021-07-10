import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PostForm from '../../components/PostForm';
import PostContext from '../../context/PostContext';
import { createPost } from '../../utils/localStorageUtils';
import styles from './style.module.css';

const CreatePost = () => {
    const history = useHistory();

    const { setPosts, posts } = useContext(PostContext);

    const handleSubmit = (state) => {
        setPosts(posts.concat(createPost(state)));
        history.push('/posts');
    };

    return (
        <div className={styles.container}>
            <PostForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreatePost;
