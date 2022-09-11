import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// react-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMidWare from "redux-saga";

import { rootReducer } from "./root-reducer";
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
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, undefined, composeEnhancer);


export const persistor = persistStore(store);
sagaMidWare.run(rootSaga);

export default store;
