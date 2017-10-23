import instance from './instance';
import { convertRESTAPI } from '../util';

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
  posts_get,
  _dashboard_get
};
