/** @jsx React.DOM */
var React = require('react');
var NavigationStore = require('../stores/NavigationStore');
var transitionTo = require('../actions/navActionCreator').transitionTo;
var Route1 = require('./Route1');
var Route2 = require('./Route2');
var Route3 = require('./Route3');

var App = React.createClass({
  
  getInitialState: function() {
    return {
      component: <div>Nothing here</div>
    };
  },

  componentDidMount: function() {
    NavigationStore.onNavigate('#/route1', this.displayRoute1);
    NavigationStore.onNavigate('#/route2', this.displayRoute2);
    NavigationStore.onNavigate('#/route1/route3', this.displayRoute3);
  },

  componentWillUnmount: function() {
    NavigationStore.removeNavigateListener('#/route1', this.displayRoute1);
    NavigationStore.removeNavigateListener('#/route2', this.displayRoute2);
    NavigationStore.removeNavigateListener('#/route1/route3', this.displayRoute3);
  },

  render: function() {
      return (
        <div className="main-app">
          <nav>
            <li><a onClick={this.dispatch} href="#/route1">Route 1</a></li>
            <li><a onClick={this.dispatch} href="#/route2">Route 2</a></li>
            <li><a onClick={this.dispatch} href="#/route1/route3">Route 3</a></li>
            <li><a onClick={this.dispatch} href="#/route2/subroute">Sub Route 4</a></li>
          </nav>

          {this.state.component}
        </div>
      );
  },

  dispatch: function(e) {
    transitionTo(e.target.getAttribute('href'));
  },

  displayRoute1: function() {
    this.setState({
      component: <Route1 />
    });
  },

  displayRoute2: function() {
    this.setState({
      component: <Route2 />
    });
  },

  displayRoute3: function() {
    this.setState({
      component: <Route3 />
    });
  }
});

module.exports = App;
