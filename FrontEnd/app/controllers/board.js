var React = require('react');
var BoardPresenter = require('../presenters/board');
var Loader = require('../components/loader');
var API = require('../utils/api');

var BoardController = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      board: {}
    };
  },

  _fetchBoardStart: function() {
    API.
      get('/boards/'+this.props.params.id).
      then(this._fetchBoardComplete);
  },

  _fetchBoardComplete: function(response) {
    this.setState({
      loading: false,
      board: response.data
    });
  },

  componentWillMount: function() {
    this._fetchBoardStart();
  },

  render: function() {
    if (this.state.loading) {
      return (<Loader message='Loading Board...' />);
    } else {
      return (<BoardPresenter board={this.state.board} />);
    }
  }
});

module.exports = BoardController;
