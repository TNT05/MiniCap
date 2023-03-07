import {createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

//const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, {} ,applyMiddleware(thunkMiddleware))
export  const persistor = persistStore(store)
