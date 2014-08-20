/** @jsx React.DOM */
var React = require('react');
var activeStateMixin = require('../mixins/activeState');
var navLinkMixin = require('../mixins/navLinkMixin');


var Link = React.createClass({
  mixins: [activeStateMixin, navLinkMixin],

  propTypes: {
    href: React.PropTypes.string.isRequired,
    activeClassName: React.PropTypes.string.isRequired
  },

  render: function() {
    var linkClass = this.state.active ? this.props.activeClassName : '';
    return (
      <a onClick={this.handleClick} href={this.props.href} className={linkClass}>{this.props.children}</a>
    );
  }
});

module.exports = Link;
