export const getPosts = field => ({
    type: 'GET_POSTS',
    field
});

export const gotPosts = info => ({
    type: 'GOT_POSTS',
    info
});