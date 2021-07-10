let nextPostID = '0';
{
    const id = localStorage.getItem('NEXT_POST_ID');
    if (id) nextPostID = id;
}

export const createPost = (post) => {
    post.id = nextPostID;
    nextPostID = String(Number(nextPostID) + 1);
    localStorage.setItem('NEXT_POST_ID', nextPostID);
    return post;
};

export const loadPosts = () => {
    const posts = localStorage.getItem('POSTS');
    if (posts) return JSON.parse(posts);
    return [];
};

export const savePosts = (posts) => {
    localStorage.setItem('POSTS', JSON.stringify(posts));
};
