import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const middlewares = [thunk];
const store = createStore(reducers,composeEnhancers(applyMiddleware(...middlewares)));


//react-tool使用に必要
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA