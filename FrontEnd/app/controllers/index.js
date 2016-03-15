var React = require('react');
var IndexPresenter = require('../presenters/index');
var Loader = require('../components/loader');
var API = require('../utils/api');

var IndexController = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      boards: []
    };
  },

  _fetchBoardsStart: function() {
    API.
      get('/boards').
      then(this._fetchBoardsComplete);
  },

  _fetchBoardsComplete: function(response) {
    this.setState({
      loading: false,
      boards: response.data
    });
  },

  componentWillMount: function() {
    this._fetchBoardsStart();
  },

  render: function() {
    if (this.state.loading) {
      return (<Loader message='Loading Boards...' />);
    } else {
      return (<IndexPresenter boards={this.state.boards} />);
    }
  }
});

module.exports = IndexController;
