import instance from './instance';
// import { convertRESTAPI } from '../util';

/** zhaopian */
function photos_get(opts) {
  return instance({
    method: 'get',
    url:  '/photos',
    opts: opts
  });
}
/** wenzhang */
function posts_get(opts) {
  return instance({
    method: 'get',
    url:  '/posts',
    opts: opts
  });
}


/** number */
function _dashboard_get(opts) {
  return instance({
    method: 'get',
    url:  '/_dashboard',
    opts: opts
  });
}

export {
  photos_get,
  posts_get,
  _dashboard_get,
};
