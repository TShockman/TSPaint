import React from 'react';
import ReactDOM from 'react-dom';
import ColorCell from './modules/canvas/colorCell';

function Root()  {
  return <div>Hello World!<ColorCell index={0} color={"#F033F0"} onSelect={() => ({})}/></div>;
}

// render root
ReactDOM.render(<Root/>, document.getElementById('root'));