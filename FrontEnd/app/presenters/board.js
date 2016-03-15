var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

require('../styles/board.scss');

function BoardTopicPresenter(props) {
  var topic = props.topic;

  return (
    <div className='topic'>
      <div className='topicName'>
        <Link to={'/topic/'+topic.id}>
          {topic.name}
        </Link>
      </div>
    </div>
  );
}

BoardTopicPresenter.propTypes = {
  index: React.PropTypes.number.isRequired,
  topic: React.PropTypes.object.isRequired
}

function BoardPresenter(props) {
  var board = props.board;

  var topics = board.topics.map(function(topic, index) {
    return (
      <BoardTopicPresenter
        key={topic.id}
        index={index}
        topic={topic} />
    );
  });

  return (
    <div className='board'>
      <h2>{board.name}</h2>
      <p>{board.description}</p>
      <div className='topics'>
        {topics}
      </div>
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
}

BoardPresenter.propTypes = {
  board: React.PropTypes.object.isRequired
}

module.exports = BoardPresenter;
