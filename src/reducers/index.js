import { combineReducers } from 'redux';

import plantReducer from './plantReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  plant: plantReducer,
  user: userReducer,
});

export default reducer;
