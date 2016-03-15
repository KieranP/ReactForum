var React = require('react');
var ReactRedux = require('react-redux');
var Router = require('react-router');
var Link = Router.Link;

var TopicPosts = require('../components/topic_posts');
var PostForm = require('../components/post_form');

require('../styles/topic.scss');

function TopicPresenter(props) {
  var topic = props.topic;

  var post_form = function() {
    if (props.session.id) {
      return (
        <PostForm
          topic={topic}
          onPostSubmitted={props.onPostSubmitted} />
      );
    } else {
      return '';
    }
  }

  return (
    <div className='topic'>
      <h2>{topic.name}</h2>
      <TopicPosts
        posts={topic.posts}
        onPostDeleted={props.onPostDeleted} />
      {post_form()}
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
}

TopicPresenter.propTypes = {
  topic: React.PropTypes.object.isRequired,
  onPostSubmitted: React.PropTypes.func,
  onPostDeleted: React.PropTypes.func
}

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
)(TopicPresenter);
