var React = require('react');

var Loader = React.createClass({

  propTypes: {
    message: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className='loader'>
        <h3>{this.props.message}</h3>
      </div>
    );
  }

});

module.exports = Loader;
