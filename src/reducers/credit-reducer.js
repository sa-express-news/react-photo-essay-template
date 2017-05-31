import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch(action.type) {
    case types.GET_CREDITS:
      return state.concat(action.credits);
    default:
      return state;
  }
};