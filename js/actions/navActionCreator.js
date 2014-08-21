var Dispatcher = require('../dispatchers/AppDispatcher');

module.exports = {

  transitionTo: function(url, params) {
    Dispatcher.dispatch({
        source: 'NAVIGATE',
        action: {
          type: 'NAVIGATE',
          url: url,
          params: params
        }
    });
  }

};

