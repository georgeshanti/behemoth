import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import { userRouterHistory } from 'react-router'
// import { createHistory } from 'history'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const history = userRouterHistory(createHistory)({
// 	basename: '/'
// })


ReactDOM.render(
    <HashRouter basename="http://excelmec.org">
        <App />
    </HashRouter>
, document.getElementById('root'));
registerServiceWorker();
