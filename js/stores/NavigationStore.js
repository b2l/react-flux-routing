var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var Dispatcher = require('../dispatchers/AppDispatcher');

var NAV_EVENT = 'NAVIGATE';
var ROUTE_CHANGED= 'ROUTE_CHANGED';

// --- State store
var _previous = null;
var _current = '/';

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

  getCurrent: function() {
    return _current;
  },

  getMatch: function(urls) {
    var matches = urls.filter(function(url) {
      url = "#" + url;
      var compiledUrl  = url.replace('*', '.*') + "$";
      return url === _current || new RegExp(compiledUrl).test(_current);
    });
    return matches.length > 0 ? matches[0] : null;
  },

  isActive: function(url) {
    return url === _current;
  }
});

NavigationStore.dispatchToken = Dispatcher.register(function(payload) {
  var action = payload.action;

  if (action.type === 'NAVIGATE') {
    var url = action.url;
    var params = action.params;

    _previous = _current;
    _current = url;
    NavigationStore.emitNav(url, params);
  }
});

module.exports = NavigationStore;
