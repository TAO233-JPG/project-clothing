import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// react-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

// 中间件
const midWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
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

export const persistor = persistStore(store);

export default store;
