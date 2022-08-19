import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import { rootReducer } from "./root-reducer";

const midWares = [logger];
const composeEnhancer = compose(applyMiddleware(...midWares));

const store = createStore(rootReducer, undefined, composeEnhancer);

export default store;
