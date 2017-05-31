import * as types from '../actions/action-types';

const defaultPhoto = {
	url: '',
	title: '',
	caption: '',
};

export default (state = [defaultPhoto, defaultPhoto], action) => {
  switch(action.type) {
    case types.GET_PHOTOS:
      return action.photos;
    default:
      return state;
  }
};