var React = require('react');
var ReactRedux = require('react-redux');

var LocalStorage = require('../utils/local_storage');
var LoginForm = require('../components/login_form');

var CurrentUser = React.createClass({

  _handleUserLogout: function(event) {
    event.preventDefault();
    this.props.clearSession();
  },

  render: function() {
    if (!this.props.session.id) {
      return (
        <div id='currentUser'>
          <LoginForm />
        </div>
      );
    }

    return (
      <div id='currentUser'>
        {this.props.session.username} - {this.props.session.email} - <a href='#' onClick={this._handleUserLogout}>[LOGOUT]</a>
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
  return {
    clearSession: function(data) {
      LocalStorage.clear('session');
      dispatch({ type: 'LOGOUT' });
    }
  };
}

module.exports = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser);
