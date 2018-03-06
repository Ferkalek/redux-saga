import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import App from './App';
import saga from './duck/saga';

const sagaMiddleware = createSagaMiddleware();


const reducer = combineReducers({reducers});
sagaMiddleware.run(saga);

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)