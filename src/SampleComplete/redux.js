import { gotReducer } from '@gothub-team/got-react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    got: gotReducer,
});

export const reduxStore = createStore(
    rootReducer,
    applyMiddleware(
        logger,
    ),
);
