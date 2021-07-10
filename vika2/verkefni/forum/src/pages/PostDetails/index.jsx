import { useContext } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import PostContext from '../../context/PostContext';
import styles from './style.module.css';

const PostDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const { posts, setPosts } = useContext(PostContext);
    const post = posts.find((post) => post.id === id);
    if (!post) return <Redirect to="/notfound" />;

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>{post.title}</h2>
                <p>Posted by {post.author}</p>
            </div>
            <p className={styles.description}>{post.description}</p>
            <div className={styles.buttons}>
                <Button
                    onClick={() => {
                        setPosts(posts.filter((post) => post.id !== id));
                        history.push('/posts');
                    }}
                    style={{ marginRight: '1rem', backgroundColor: 'red' }}
                >
                    Delete
                </Button>
                <Button onClick={() => history.push(`/edit-post/${id}`)}>Edit</Button>
            </div>
        </div>
    );
};

export default PostDetails;
