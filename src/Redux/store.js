import usersReducer from "./usersr-reducer";
import authReducer from "./auth-reducer";
import { combineReducers, createStore, applyMiddleware } from "redux"; 
import { reducer as formReducer } from 'redux-form';
import ReduxThunk from 'redux-thunk';

let reducers = combineReducers({
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

//For testing in browser console
window.__store__ = store;

export default store;