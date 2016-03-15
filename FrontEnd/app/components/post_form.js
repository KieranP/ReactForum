var React = require('react');

var API = require('../utils/api');

var PostForm = React.createClass({

  propTypes: {
    topic: React.PropTypes.object.isRequired,
    onPostSubmitted: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      body: ''
    };
  },

  _onPostBodyChange: function(event) {
    this.setState({
      body: event.target.value
    });
  },

  _generatePostData: function() {
    return {
      post: {
        topic_id: this.props.topic.id,
        body: this.state.body
      }
    };
  },

  _handlePostSubmitted: function(response) {
    if (this.props.onPostSubmitted) {
      this.props.onPostSubmitted(response.data);
    }

    this.setState(this.getInitialState());
  },

  _handlePostFailed: function(response) {
    alert('Creating Post Failed!');
  },

  _handlePostSubmit: function(event) {
    event.preventDefault();

    API.
      post('/posts', this._generatePostData()).
      then(this._handlePostSubmitted).
      catch(this._handlePostFailed);
  },

  render: function() {
    return (
      <form onSubmit={this._handlePostSubmit}>
        <textarea name='post[body]' value={this.state.body} onChange={this._onPostBodyChange} />
        <input type='submit' value='Create Post' />
      </form>
    );
  }

});

module.exports = PostForm;
