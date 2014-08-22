var NavigationStore = require('../stores/NavigationStore').Store;

var navigableMixin = {

  getInitialState: function() {
    return {
      partial: null,
      params: NavigationStore.getParams()
    };
  },

  updateState: function() {
    var match = NavigationStore.getMatch(Object.keys(this.routes));
    var partial = match? this.routes[match] : null;
    var params = NavigationStore.getParams();
    this.setState({
      partial: partial,
      params: params
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
