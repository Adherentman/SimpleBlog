export const getPosts = field => ({
    type: 'GET_POSTS',
    field
});

export const gotPosts = posts => ({
    type: 'GOT_POSTS',
    posts
});