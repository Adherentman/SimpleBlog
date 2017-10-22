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

/** browserList */
function browserList_get(opts) {
  return instance({
    method: 'get',
    url:  '/browserList',
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
  browserList_get,
  _dashboard_get
};
