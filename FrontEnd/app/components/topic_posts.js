var React = require('react');
var ReactRedux = require('react-redux');

var TopicPost = require('../components/topic_post');

var TopicPosts = React.createClass({

  propTypes: {
    posts: React.PropTypes.array.isRequired,
    onPostDeleted: React.PropTypes.func
  },

  render: function() {
    var posts = this.props.posts.map(function(post, index) {
      return (
        <TopicPost
          key={post.id}
          index={index}
          post={post}
          onPostDeleted={this.props.onPostDeleted} />
      );
    }.bind(this));

    return (
      <div className='posts'>
        {posts}
      </div>
    );
  }

});

module.exports = TopicPosts;
