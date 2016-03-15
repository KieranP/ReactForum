var Axios = require('axios');

var LocalStorage = require('./local_storage');

var API = {

  default: function() {
    var user = LocalStorage.get('session');

    return Axios.create({
      baseURL: 'http://localhost:3000/api/v1',
      headers: {
        'X-Access-Token': (user && user.access_token)
      }
    });
  },

  get: function(path) {
    return this.default().get(path);
  },

  post: function(path, params) {
    return this.default().post(path, params);
  },

  delete: function(path, params) {
    return this.default().delete(path, params);
  }

}

module.exports = API;
