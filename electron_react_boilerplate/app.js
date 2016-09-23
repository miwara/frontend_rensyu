'use strict';
import React from 'react';
import { render } from 'react-dom';

let App = React.createClass ({
  render: function() {
    return (
        <div>hello world from React</div>
    );
  }
});

render((
    <App />
), document.getElementById('app'));
