import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// react-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

import createSagaMidWare from "redux-saga";

import { rootSaga } from "./root-sage";

// 中间件

const sagaMidWare = createSagaMidWare();

const midWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMidWare,
].filter(Boolean);
const composeEnhancer = compose(applyMiddleware(...midWares));

// react-persist
const persistConfig = {
  key: "root",
  storage,
  whilelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, undefined, composeEnhancer);

sagaMidWare.run(rootSaga);

export const persistor = persistStore(store);

export default store;
