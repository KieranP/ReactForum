var React = require('react');
var ReactRedux = require('react-redux');

var API = require('../utils/api');

var TopicPost = React.createClass({

  propTypes: {
    index: React.PropTypes.number.isRequired,
    post: React.PropTypes.object.isRequired,
    onPostDeleted: React.PropTypes.func
  },

  _handlePostDeleted: function(response) {
    if (this.props.onPostDeleted) {
      this.props.onPostDeleted(this.props.index);
    }
  },

  _handlePostDelete: function(event) {
    event.preventDefault();

    API.
      delete('/posts/'+this.props.post.id).
      then(this._handlePostDeleted);
  },

  _deleteLink: function() {
    if (this.props.session.id == this.props.post.user.id) {
      return (
        <div className='postDelete'>
          <a href='#' onClick={this._handlePostDelete}>[DELETE]</a>
        </div>
      );
    } else {
      return '';
    }
  },

  render: function() {
    return (
      <div className='post'>
        <div className='postBody'>
          {this.props.post.body}
        </div>
        <div className='postAuthor'>
          Posted by {this.props.post.user.username}
        </div>
        {this._deleteLink()}
      </div>
    );
  }

});

var mapStateToProps = function(state) {
  return {
    session: state.session
  };
}

var mapDispatchToProps = function(dispatch) {
  return {};
}

module.exports = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicPost);
