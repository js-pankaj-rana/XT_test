import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import {commentReducer} from './../reducers';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const store = createStore(
    commentReducer,
    applyMiddleware(sagaMiddleware)
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  
  return store;
};

export default configureStore;
