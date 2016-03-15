var React = require('react');
var ApplicationPresenter = require('../presenters/application');

var ApplicationController = React.createClass({
  render: function() {
    return (
      <ApplicationPresenter {...this.props} />
    );
  }
});

module.exports = ApplicationController;
