import Immutable from 'immutable';
import { store } from '../env';
import { photos_get } from '../api/demo/index';
import * as lifetripActions from '../actions/lifetripActions';

const initialState = Immutable.fromJS({
  photos: [],
});

const getPhotos = (state, field) => {
  photos_get().then(
    res => {
      let list = res && res.data && res.data.photos;
      console.log(list, 'photos');
      store.dispatch(lifetripActions.gotPhotos(list));
    },
    err => {
      console.log(err);
    }
  );
  return state;
};

const gotPhotos = (state, photos) => {
  let list = Immutable.fromJS(photos);
  return state.set('photos', list);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PHOTOS':
      return getPhotos(state, action.field);
    case 'GOT_PHOTOS':
      return gotPhotos(state, action.photos);
    default:
      return state;
  }
};
