var React = require('react');
var TopicPresenter = require('../presenters/topic');
var Loader = require('../components/loader');
var API = require('../utils/api');
var Update = require('react-addons-update');

var TopicController = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      topic: {}
    };
  },

  _fetchTopicStart: function() {
    API.
      get('/topics/'+this.props.params.id).
      then(this._fetchTopicComplete);
  },

  _fetchTopicComplete: function(response) {
    this.setState({
      loading: false,
      topic: response.data
    });
  },

  _onPostSubmitted: function(post) {
    var newState = Update(this.state, {
      topic: {
        posts: { $push: [post] }
      }
    });

    this.setState(newState);
  },

  _onPostDeleted: function(index) {
    var newState = Update(this.state, {
      topic: {
        posts: { $splice: [[index, 1]] }
      }
    });

    this.setState(newState);
  },

  componentWillMount: function() {
    this._fetchTopicStart();
  },

  render: function() {
    if (this.state.loading) {
      return (<Loader message='Loading Topic...' />);
    } else {
      return (
        <TopicPresenter
          topic={this.state.topic}
          onPostSubmitted={this._onPostSubmitted}
          onPostDeleted={this._onPostDeleted} />
      );
    }
  }
});

module.exports = TopicController;
