import * as types from './action-types';
import photos from '../data/photos.json';

const getPhotos = () => {
	return {
    type: types.GET_PHOTOS,
    photos,
  };
};

const photo = { getPhotos };

export default { photo };