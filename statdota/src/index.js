import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { rootReducer } from './Reducers/reducer.js'


import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

// const store = createStore(rootReducer);
// console.log('Store is:', store);
// console.log('State is:', store.getState());

ReactDOM.render(

    // <Provider store={ store }></Provider>
      <Router>
        <div>
        <Route path="/" component={ App } />
        </div>
      </Router>, document.getElementById('root'));
registerServiceWorker();
