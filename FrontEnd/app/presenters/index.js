var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

require('../styles/index.scss');

function IndexBoardPresenter(props) {
  var board = props.board;

  return (
    <div className='board'>
      <div className='boardName'>
        <Link to={'/board/'+board.id}>
          {board.name}
        </Link>
      </div>
      <div className='boardDesc'>
        {board.description}
      </div>
    </div>
  );
}

IndexBoardPresenter.propTypes = {
  index: React.PropTypes.number.isRequired,
  board: React.PropTypes.object.isRequired
}

function IndexPresenter(props) {
  var boards = props.boards.map(function(board, index) {
    return (
      <IndexBoardPresenter
        key={board.id}
        index={index}
        board={board} />
    );
  });

  return (
    <div className='boards'>
      {boards}
    </div>
  );
}

IndexPresenter.propTypes = {
  boards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

module.exports = IndexPresenter;
