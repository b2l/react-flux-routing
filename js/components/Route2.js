/** @jsx React.DOM */
var React = require('react');
var NavigationStore = require('../stores/NavigationStore');
var transitionTo = require('../actions/navActionCreator').transitionTo;
var SubPane = require('./SubPane');

var Route2 = React.createClass({

  getInitialState: function() {
    return {
      subpane: null
    };
  },

  componentDidMount: function() {
    NavigationStore.onNavigate('#/route2/subroute', this.displaySubPane);
  },

  componentWillUnmout: function() {
    NavigationStore.removeNavigateListener('#/route2/subroute', this.displaySubPane);
  },

  render: function() {
    var compose = this.state.subpane !== null;

    var pane = (
      <div className="one-pane">
        <h1>This is pane 1</h1>
      </div>
    );

    if (compose) {
      pane = (
        <div className="pane-wrapper">
          <div className="pane-one">
            <h1>This is pane 1, not dynamic</h1>
          </div>
          <div className="pane-two">
            {this.state.subpane}
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
  },

  displaySubPane: function() {
    this.setState({
      subpane: <SubPane />
    });
  }

});

module.exports = Route2;
