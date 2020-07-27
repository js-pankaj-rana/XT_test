import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import rootReducer from './../reducers';
import { persistStore } from 'redux-persist';


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  
  store.runSaga = sagaMiddleware.run;
  
  const persistor = persistStore(store);

  store.close = () => store.dispatch(END);
  
  return {
    store,
    persistor
  };
};

export default configureStore;
