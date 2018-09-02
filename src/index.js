import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider }  from 'react-redux';

import { createStore }  from 'redux';
import rootReducer from './reducers.js';
import registerServiceWorker from './registerServiceWorker';
import MyWords from './myWords.js';

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store = {store}>
    <MyWords />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
