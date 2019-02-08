import React from 'react';
import ReactDOM from 'react-dom';

function Root()  {
  return <div>Hello World!</div>;
}

// render root
ReactDOM.render(<Root/>, document.getElementById('root'));