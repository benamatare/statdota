// React & Redux & Thunk & Router
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { rootReducer } from './reducer.js'
import registerServiceWorker from './registerServiceWorker';
// Componenets / Containers
import App from './App';
// Styling
import './index.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

  const store = createStore(rootReducer, compose(applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
   ))
   // console.log('Store is:', store);
   // console.log('Global State is:', store.getState());

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <Router>
            <Switch>
              <Route exact path="/" component={App}/>
            </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch({ type: '@@INIT' });
