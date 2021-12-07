import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../reducers/index';
;


const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
        // serializableCheck: {
        //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // },
      }),
  })
  
  let persistor = persistStore(store)

  export {store, persistor};

