var Redux = require('redux');
var ReactRouterRedux = require('react-router-redux');

var session = require('./session');

var Reducers = Redux.combineReducers({
  routing: ReactRouterRedux.routerReducer,
  session
});

module.exports = Reducers;
