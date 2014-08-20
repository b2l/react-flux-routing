var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var Dispatcher = require('../dispatchers/AppDispatcher');

var NAV_EVENT = 'NAVIGATE';

// --- State store
var _previous = null;
var _current = '/';

var NavigationStore = merge(EventEmitter.prototype, {
  emitNav: function(url, params) {
    this.emit(NAV_EVENT+'__'+url, params);
  },

  onNavigate: function(url, callback) {
    this.on(NAV_EVENT+'__'+url, callback);
  },

  removeNavigateListener: function(url, callback) {
    this.removeListener(NAV_EVENT+'__'+url, callback);
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
