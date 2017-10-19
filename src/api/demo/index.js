import instance from './instance';
import { convertRESTAPI } from '../util';

/** number */
function dashboard(opts) {
  return instance({
    method: 'get',
    url:  '/_dashboard',
    opts: opts
  });
}

export {
  dashboard
};
