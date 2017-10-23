import { combineReducers } from 'redux';
import dashboard from './dashboard';
import posts from './posts';
import lifetrip from './lifetrip';

const reducers = combineReducers({
    dashboard,
    posts,
    lifetrip,
});

export default reducers;