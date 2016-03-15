var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var ApplicationController = require('../controllers/application');
var IndexController = require('../controllers/index');
var BoardController = require('../controllers/board');
var TopicController = require('../controllers/topic');

var Routes = function(history) {
  return (
    <Router history={history}>
      <Route path='/' component={ApplicationController}>
        <IndexRoute component={IndexController} />
        <Route path='/board/:id' component={BoardController} />
        <Route path='/topic/:id' component={TopicController} />
      </Route>
    </Router>
  );
}

module.exports = Routes;
