/** @jsx React.DOM */
var React = require('react');
var NavigationStore = require('../stores/NavigationStore');
var Dispatcher = require('../dispatchers/AppDispatcher');

var Route1 = React.createClass({

  render: function() {
    return (
      <div>
        <h1>This is route 1</h1>
      </div>
    );
  }

});

module.exports = Route1;
