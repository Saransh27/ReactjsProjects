import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './include/bootstrap';
import {BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer/rootReducer';

console.log("index.js rootreducer: ",rootReducer.productreducer);

// const logger = store => {
//     return next => {
//         return action => {
//             console.log('[Middleware] Dispatching', action);
//             const result = next(action);
//             console.log('[Middleware] next state', store.getState());
//             return result;
//         }
//     }
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
     document.getElementById('root'));
registerServiceWorker();
