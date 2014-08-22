var pathToRegexp = require('path-to-regexp');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var Dispatcher = require('../dispatchers/AppDispatcher');

var NAV_EVENT = 'NAVIGATE';
var ROUTE_CHANGED= 'ROUTE_CHANGED';

// --- State store
var _previous = null;
var _current = '/';
var _params = {};

// --- Tools
function first(array, cb) {
  var it = 0;
  var max = array.length
  var found = false;
  while(!found && it < max) {
    var item = array[it];
    var rs = cb(item, it, array);
    found = rs;
    if (!found) {
      it++;
    }
  }
  return found ? array[it] : null;
}

var NavigationStore = merge(EventEmitter.prototype, {
  emitNav: function(url, params) {
    this.emit(ROUTE_CHANGED);
  },

  addChangeListener: function(cb) {
    this.on(ROUTE_CHANGED, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(ROUTE_CHANGED, cb);
  },

  getParams: function() {
    return _params;
  },

  getCurrent: function() {
    return _current;
  },

  getMatch: function(urls) {
    var currentUrl = _current;
    if (currentUrl.indexOf('#') === 0) {
      currentUrl = currentUrl.substr(1);
    }

    function check(url, index, routes) {
      var keys = [];
      var re = pathToRegexp(url, keys);
      var match = re.test(currentUrl);
      if (match) {
        var rs = re.exec(currentUrl);
        _params = {};
        keys.map(function(key, i) {
          _params[key.name] = rs[i+1];
        });
      }
      return match;
    }

    return first(urls,check);
  },

  isActive: function(url) {
    return url === _current;
  }
});

module.exports.Store = NavigationStore;
module.exports.register = function(payload) {
  var action = payload.action;

  if (action.type === 'NAVIGATE') {
    var url = action.url;
    var params = action.params;

    _previous = _current;
    _current = url;
    NavigationStore.emitNav(url, params);
  }
}
