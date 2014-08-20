var transitionTo = require('../actions/navActionCreator').transitionTo;

module.exports = {
  handleClick: function(e) {
    transitionTo(e.target.getAttribute('href'));
  }
}

