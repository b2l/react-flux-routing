var React = require('react');
var NavigationStore = require('../stores/NavigationStore');

var navigableMixin = {

  getInitialState: function() {
    return {
      partial: this.defaultPartial || null
    };
  },

  componentDidMount: function() {
    if (this.routes) {
      for (var route in this.routes) {
        NavigationStore.onNavigate(route, this.setPartial);
      }
    }
  },

  componentWillUnmount: function() {
    if (this.routes) {
      for (var route in this.routes) {
        NavigationStore.removeNavigateListener(route, this.setPartial);
      }
    }
  },

  setPartial: function() {
    if (!this.isMounted) return;

    this.setState({
      partial: this.routes[NavigationStore.getCurrent()]
    });
  }
}

module.exports = navigableMixin;
