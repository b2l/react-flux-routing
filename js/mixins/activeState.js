var NavigationStore = require('../stores/NavigationStore').Store;

module.exports = {
  getDefaultProps: function() {
    return {
      activeClassName: 'active'
    };
  },

  getInitialState: function() {
    return {
      active: false
    }
  },

  updateState: function() {
    this.setState({
      active: NavigationStore.isActive(this.props.href)
    });
  },

  componentDidMount: function() {
    NavigationStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function() {
    NavigationStore.removeChangeListener(this.updateState);
  }
};


