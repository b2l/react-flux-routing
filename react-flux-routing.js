/** @jsx React.DOM */
var React = require('react');
var navStore = require('./js/stores/NavigationStore');
var NavigationStore = navStore.Store;

module.exports = function(Dispatcher) {

  // Register the store
  Dispatcher.register(navStore.register);

  // Actions
  function transitionTo(url, params) {
    Dispatcher.dispatch({
        source: 'NAVIGATE',
        action: {
          type: 'NAVIGATE',
          url: url,
          params: params
        }
    });
  }

  // Mixin
  var activeStateMixin = require('./js/mixins/activeState');
  var navigableMixin = require('./js/mixins/navigableMixin');
  var navLinkMixin = {
    handleClick: function(e) {
      transitionTo(e.target.getAttribute('href'));
    }
  };

  // Components
  var Link = React.createClass({
    mixins: [activeStateMixin, navLinkMixin],

    propTypes: {
      href: React.PropTypes.string.isRequired,
      activeClassName: React.PropTypes.string.isRequired
    },

    render: function() {
      var linkClass = this.state.active ? this.props.activeClassName : '';
      this.props.href = "#" + this.props.href;
      return (
        <a onClick={this.handleClick} href={this.props.href} className={linkClass}>{this.props.children}</a>
      );
    }
  });

  return {
    Action: {
      transitionTo: transitionTo
    },
    mixins: {
      navLinkMixin: navLinkMixin,
      activeStateMixin: activeStateMixin,
      navigableMixin: navigableMixin
    },
    store: {
      NavigationStore: NavigationStore
    },
    components: {
      Link: require('./js/components/Link')
    }
  };
};

