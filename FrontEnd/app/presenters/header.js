var React = require('react');

var CurrentUser = require('../components/current_user');

require('../styles/header.scss');

function HeaderPresenter(props) {
  return (
    <div id='header'>
      <h1>React.JS Forum</h1>
      <CurrentUser />
      <div className='clear' />
    </div>
  );
}

module.exports = HeaderPresenter;
