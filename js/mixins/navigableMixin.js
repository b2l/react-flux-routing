var React = require('react');
var NavigationStore = require('../stores/NavigationStore');

var navigableMixin = {

  getInitialState: function() {
    return {
      partial: null
    };
  },

  updateState: function() {
    var match = NavigationStore.getMatch(Object.keys(this.routes));
    var partial = match? this.routes[match] : null;
    this.setState({
      partial: partial
    });
  },

  componentDidMount: function() {
    this.updateState();
    NavigationStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function() {
    NavigationStore.removeChangeListener(this.updateState);
  }
}

module.exports = navigableMixin;
