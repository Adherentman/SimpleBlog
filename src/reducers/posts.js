import Immutable from 'immutable';
import { store } from '../env';
import { posts_get } from '../api/demo/index';
import * as postsActions from '../actions/postsActions';

const initialState = Immutable.fromJS({
    posts: [],
    article: null
});

const getPosts = (state, field) => {
posts_get().then(res => {
    let list = res && res.data && res.data.posts;
    console.log(list,'posts');
    store.dispatch(postsActions.gotPosts(list));
},err => {
    console.log(err);
});
return state;
};

const gotPosts = (state, posts) => {
    let list = Immutable.fromJS(posts);
    return state.set('posts', list);
};




export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return getPosts(state, action.field);
        case 'GOT_POSTS':
            return gotPosts(state, action.posts);
        default:
            return state;
    }
};