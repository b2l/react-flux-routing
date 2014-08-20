/** @jsx React.DOM */
var React = require('react');
var NavigationStore = require('../stores/NavigationStore');
var navigableMixin = require('../mixins/navigableMixin');
var SubPane = require('./SubPane');
var Link = require('./Link');

var Route2 = React.createClass({
  mixins: [navigableMixin],

  routes: {
    '#/route2/subroute': <SubPane />
  },

  render: function() {
    var compose = this.state.partial !== null;

    var pane = (
      <div className="one-pane">
        <h1>This is pane 1</h1>
        <Link href="#/route2/subroute">Create a new pane</Link>
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
