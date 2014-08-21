# React Flux Routing

This is a concept of routing with React and Flux.

# Installation

```
npm install react-flux-routing
```

# Usage

## Setup

React Flux Routing is just a set of tools, to use it, you have to create a wrapper.
Create a file named Routing.js

Ex: Routing.js

```
var Dispatcher = require('your-dispatcher');
var Router = require('../react-flux-routing')(Dispatcher);

module.exports = Router;
```

React Flux Routing expect your dispatcher to have a method ```register``` to register a store.


## Routing

Now do you have configured React Flux Routing, you can navigate with it.

React Flux Routing provide a mixin to handle routes in View-Controller :

```
var routing = require('./Router');
var View1 = require('./view1');
var View2 = require('./view2');

var App = React.createClass({
  mixins: [routing.navigableMixin],

  routes: {
    '/path/1': <View1 />,
    '/path/2': <View2 />
  }

  render: function() {
    return (
      <div>
        <h1>Hello world !</h1>
        {this.state.partial}
      </div>
    );
  }
});

```

