var Dispatcher = require('./dispatchers/AppDispatcher');
var Router = require('../react-flux-routing')(Dispatcher);

module.exports = Router;
