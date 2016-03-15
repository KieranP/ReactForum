var LocalStorage = {

  get: function(key) {
    return JSON.parse(localStorage.getItem(key));
  },

  set: function(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  },

  clear: function(key) {
    localStorage.removeItem(key);
    return true;
  }

}

module.exports = LocalStorage;
