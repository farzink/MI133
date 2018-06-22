import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, test } from './data/store'
const defaultStore = store
const main = <Router>
    <Provider store={ defaultStore }>
        <App />
    </Provider>
</Router>

test(defaultStore)



ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
