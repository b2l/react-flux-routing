/** @jsx React.DOM */
var React = require('react');
var Routing = require('../router');
var navigableMixin = Routing.mixins.navigableMixin;
var Link = Routing.components.Link;
var Route1 = require('./Route1');
var Route2 = require('./Route2');
var Route3 = require('./Route3');

var App = React.createClass({
  mixins: [navigableMixin],

  defaultPartial: <div>Nothing Here</div>,
  routes: {
    '/route1': <Route1 />,
    '/route1/route3': <Route3 />,
    '/route2(.*)': <Route2 />
  },

  render: function() {
    return (
      <div className="main-app">
        <nav>
          <li><Link href="/route1">Route 1</Link></li>
          <li><Link href="/route2">Route 2</Link></li>
          <li><Link href="/route1/route3">Route 3</Link></li>
        </nav>

        {this.state.partial}
      </div>
    );
  }
});

module.exports = App;
