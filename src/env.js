
import reducers from './reducers';
import { createStore } from 'redux';

export const ts = (value) => JSON.stringify(value);

export const Url = (url) => '/build/' + url;

export const store = createStore(
    reducers,
    window.devToolsExtension ? window.devToolsExtension() : undefined
);