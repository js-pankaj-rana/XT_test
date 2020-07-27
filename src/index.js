import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import './assets/css/bootstrap.min.css';
import './assets/scss/style.scss';

import {RouterHOC} from './router';
import configureStore from './store';
import rootSaga from './saga';

import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = configureStore();

store.runSaga(rootSaga);

render(<Provider store={store}>
            <PersistGate persistor={persistor}>
                <RouterHOC />
            </PersistGate>
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();