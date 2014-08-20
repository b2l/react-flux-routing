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
    this.emit(NAV_EVENT+'__'+url, params);
    this.emit(ROUTE_CHANGED);
  },

  addChangeListener: function(cb) {
    this.on(ROUTE_CHANGED, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(ROUTE_CHANGED, cb);
  },

  onNavigate: function(url, callback) {
    this.on(NAV_EVENT+'__'+url, callback);
  },

  removeNavigateListener: function(url, callback) {
    this.removeListener(NAV_EVENT+'__'+url, callback);
  },

  getCurrent: function() {
    return _current;
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
