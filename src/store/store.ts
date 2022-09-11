import { compose, createStore, applyMiddleware, Middleware } from 'redux'
import logger from 'redux-logger'
// react-persist
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMidWare from 'redux-saga'

import { rootReducer } from './root-reducer'
import { rootSaga } from './root-sage'

export type RootState = ReturnType<typeof rootReducer>

// 中间件

const sagaMidWare = createSagaMidWare()

const midWares = [process.env.NODE_ENV === 'development' && logger, sagaMidWare].filter(
  (middleWare): middleWare is Middleware => Boolean(middleWare),
)
const composeEnhancer = compose(applyMiddleware(...midWares))

// react-persist
type extendPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig: extendPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, undefined, composeEnhancer)

export const persistor = persistStore(store)
sagaMidWare.run(rootSaga)

export default store
