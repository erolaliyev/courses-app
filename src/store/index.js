import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
	authors: authorsReducer,
	courses: coursesReducer,
	user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
