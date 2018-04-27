import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import { Provider } from 'react-redux';
import { rootReducer } from './reducer.js'


import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
   window.devToolsExtension ? window.devToolsExtension() : f => f
 ))
console.log('Store is:', store);
console.log('Global State is:', store.getState());

ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={ App } />
        </Switch>
        </div>
      </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch({ type: '@@INIT' });
