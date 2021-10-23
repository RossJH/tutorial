import React from 'react';
import ReactDom from 'react-dom'


// stateless functional componemt
//always return something even if empty element so it doesnt throw error. 

const Greeting = () => {
  return React.createElement('h1', {}, 'Hello World');
}


ReactDom.render(<Greeting />, document.getElementById('root'))

