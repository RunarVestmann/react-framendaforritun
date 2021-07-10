import { useState } from 'react';
import { useEffect } from 'react';
import { loadPosts, savePosts } from '../utils/localStorageUtils';

const usePostContext = () => {
    const [context, setContext] = useState({ posts: loadPosts() });

    useEffect(() => {
        const setPosts = (posts) => {
            setContext((context) => {
                savePosts(posts);
                return { ...context, posts };
            });
        };
        setContext((context) => ({
            ...context,
            setPosts,
        }));
    }, [setContext]);

    return context;
};

export default usePostContext;
