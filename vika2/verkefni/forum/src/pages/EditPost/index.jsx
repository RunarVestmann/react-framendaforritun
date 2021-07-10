import { useContext } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import PostForm from '../../components/PostForm';
import PostContext from '../../context/PostContext';
import styles from './style.module.css';

const EditPost = () => {
    const history = useHistory();
    const { id } = useParams();
    const { setPosts, posts } = useContext(PostContext);

    const post = posts.find((post) => post.id === id);
    if (!post) return <Redirect to="/notfound" />;

    const handleSubmit = (state) => {
        setPosts(posts.map((post) => (post.id === id ? state : post)));
        history.push(`/posts/${id}`);
    };

    return (
        <div className={styles.container}>
            <PostForm onSubmit={handleSubmit} initalState={post} />
        </div>
    );
};

export default EditPost;
