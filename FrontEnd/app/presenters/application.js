var React = require('react');

var HeaderPresenter = require('../presenters/header');

require('../styles/application.scss');

function ApplicationPresenter(props) {
  return (
    <div id='outer_wrapper'>
      <HeaderPresenter />

      <div id='body'>
        {props.children}
      </div>
    </div>
  );
}

module.exports = ApplicationPresenter;
