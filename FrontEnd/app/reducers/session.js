var SessionReducer = function(state = {}, action) {
  switch (action.type) {
  case 'LOGIN':
    return action.user;
  case 'LOGOUT':
    return {};
  default:
    return state;
  }
}

module.exports = SessionReducer;
