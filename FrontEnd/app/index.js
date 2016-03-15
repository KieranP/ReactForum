var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var Redux = require('redux');
var ReactRedux = require('react-redux');
var Provider = ReactRedux.Provider;
var ReactRouterRedux = require('react-router-redux');
var syncHistoryWithStore = ReactRouterRedux.syncHistoryWithStore;

var Routes = require('./config/routes');
var Reducers = require('./reducers/all');
var LocalStorage = require('./utils/local_storage');

var dev = window.devToolsExtension;
var store = Redux.createStore(Reducers, {
  session: (LocalStorage.get('session') || {})
}, (dev && dev()));
var history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    {Routes(history)}
  </Provider>,
  document.getElementById('app')
);
