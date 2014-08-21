/** @jsx React.DOM */
var React = require('react');
var Routing = require('../router');
var navigableMixin = Routing.mixins.navigableMixin;
var Pane = require('./pane');

var SubPane = React.createClass({
  mixins: [navigableMixin],

  routes: {
    '/route2/subroute/test': <Pane />
  },

  render: function() {
    return (
      <div>
        <h1>This is the SubRoute 1</h1>
        {this.state.partial}
      </div>
    );
  }

});

module.exports = SubPane;
