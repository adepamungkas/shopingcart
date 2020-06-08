import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import ProductReducer from './IndexReducer';

const store = createStore(
    ProductReducer,
    applyMiddleware(logger, thunk)
)

export default store
