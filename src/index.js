import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';

var store
const middlewares = [thunk];
if(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;    
     store = createStore(reducers,composeEnhancers(applyMiddleware(...middlewares)));
}else{
     store = createStore(reducers,applyMiddleware(...middlewares));
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA