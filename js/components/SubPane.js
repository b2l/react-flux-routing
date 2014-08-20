/** @jsx React.DOM */
var React = require('react');
var NavigationStore = require('../stores/NavigationStore');
var Dispatcher = require('../dispatchers/AppDispatcher');

var SubPane = React.createClass({

  render: function() {
    return (
      <div>
        <h1>This is the SubRoute 1</h1>
      </div>
    );
  }

});

module.exports = SubPane;
