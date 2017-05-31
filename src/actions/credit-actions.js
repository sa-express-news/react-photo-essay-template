import * as types from './action-types';
import credits from '../data/credits.json';

const getCredits = () => {
	return {
    type: types.GET_CREDITS,
    credits,
  };
};

export default { getCredits };