/** @jsx React.DOM */
var React = require('react');
var Routing = require('../router');
var navigableMixin = Routing.mixins.navigableMixin;
var Link = Routing.components.Link;
var Pane = require('./pane');

var SubPane = React.createClass({
  mixins: [navigableMixin],

  routes: {
    '/route2/:routeName/test': <Pane />
  },

  render: function() {
    var subroute = '/route2/' + this.state.params.routeName + '/test';
    return (
      <div>
        <h1>This is the SubRoute 1, called with params : {this.state.params.routeName}</h1>
        <Link href={subroute} >Create a sub sub route</Link>
        {this.state.partial}
      </div>
    );
  }

});

module.exports = SubPane;
