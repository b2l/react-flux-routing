/** @jsx React.DOM */
var React = require('react');
var Routing = require('../router');
var navigableMixin = Routing.mixins.navigableMixin;
var SubPane = require('./SubPane');
var Link = Routing.components.Link;

var Route2 = React.createClass({
  mixins: [navigableMixin],

  routes: {
    '/route2/:routeName(.*)': <SubPane />,
  },

  render: function() {
    var compose = this.state.partial !== null;

    var pane = (
      <div className="one-pane">
        <h1>This is pane 1</h1>
        <Link href="/route2/subroute">Create pane with param "subroute"</Link>
        <br />
        <Link href="/route2/another-one">Create pane with param "another-one"</Link>
      </div>
    );

    if (compose) {
      pane = (
        <div className="pane-wrapper">
          <div className="pane-one">
            <h1>This is pane 1, not dynamic</h1>
          </div>
          <div className="pane-two">
            {this.state.partial}
          </div>
        </div>
      );
    }

    return (
      <div>
        <h1>This is route 2</h1>
        {pane}
      </div>
    );
  }

});

module.exports = Route2;
