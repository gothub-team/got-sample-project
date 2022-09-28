import { gotReducer } from '@gothub-team/got-react';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
    got: gotReducer,
});

export const reduxStore = createStore(rootReducer);
