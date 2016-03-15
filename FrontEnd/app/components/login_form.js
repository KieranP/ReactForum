var React = require('react');
var ReactRedux = require('react-redux');

var LocalStorage = require('../utils/local_storage');
var API = require('../utils/api');

var LoginForm = React.createClass({

  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },

  _onLoginUsernameChange: function(event) {
    this.setState({
      username: event.target.value
    });
  },

  _onLoginPasswordChange: function(event) {
    this.setState({
      password: event.target.value
    });
  },

  _generateLoginData: function() {
    return {
      username: this.state.username,
      password: this.state.password
    };
  },

  _handleLoginSubmitted: function(response) {
    this.props.setSession(response.data);
  },

  _handleLoginFailed: function(response) {
    alert('Login failed!');
  },

  _handleLoginSubmit: function(event) {
    event.preventDefault();

    API.
      post('/sessions', this._generateLoginData()).
      then(this._handleLoginSubmitted).
      catch(this._handleLoginFailed);
  },

  render: function() {
    return (
      <form onSubmit={this._handleLoginSubmit}>
        <input type='text' value={this.state.username} placeholder='Username' onChange={this._onLoginUsernameChange} />
        <input type='password' value={this.state.password} placeholder='Password' onChange={this._onLoginPasswordChange} />
        <input type='submit' value='Login' />
      </form>
    );
  }

});

var mapStateToProps = function(state) {
  return {};
}

var mapDispatchToProps = function(dispatch) {
  return {
    setSession: function(data) {
      LocalStorage.set('session', data);
      dispatch({ type: 'LOGIN', user: data });
    }
  };
}

module.exports = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
