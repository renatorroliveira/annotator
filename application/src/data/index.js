import { combineReducers } from 'redux';

import user from './User/reducer';

const rootReducer = combineReducers({ user });

export default rootReducer;
