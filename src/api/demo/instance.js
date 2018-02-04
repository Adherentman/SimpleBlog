import { createAPI } from '../util';
import config from '../config';

const baseUrl = {
  mock: 'https://www.easy-mock.com/mock/59e213e6f88b6c3798347019/bg',
  dev: '',
  pre: '',
  prod: '',
}[config.env || 'mock'];

export default createAPI(baseUrl);
