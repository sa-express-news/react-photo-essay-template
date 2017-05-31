import { combineReducers } from 'redux';

// Reducers
import photos from './photo-reducer';
import credits from './credit-reducer';

// Combine Reducers
const reducers = combineReducers({
    photos,
    credits,
});

export default reducers;