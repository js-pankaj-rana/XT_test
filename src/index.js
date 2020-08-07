import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './assets/css/bootstrap.min.css';
import './assets/scss/style.scss';

import RouterHOC from './router';
import configureStore from './store';
import rootSaga from './saga';

import { createBrowserHistory, createMemoryHistory } from 'history';
let history = process.env.BROWSER ? createBrowserHistory() : createMemoryHistory();


const {store } = configureStore();

store.runSaga(rootSaga);

export const App = () => (<Provider store={store}>
                            <Router history={history}>
                                <RouterHOC />
                            </Router>
                        </Provider>
                    );

if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('root'));
}
