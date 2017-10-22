import { combineReducers } from 'redux';
import dashboard from './dashboard';
import posts from './posts';

const reducers = combineReducers({
    dashboard,
    posts,
});

export default reducers;