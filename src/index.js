import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import './assets/css/bootstrap.min.css';
import './assets/scss/style.scss';

import App from './containers/app';
import configureStore from './store';
import rootSaga from './saga';

const store = configureStore();

store.runSaga(rootSaga);

render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();