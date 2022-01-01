import React from 'react';
import ReactDOM from 'react-dom';
import SecondElement from './Second.js'


class FirstElemnet extends React.Component {
  render() {
    return (
      <div>
        <h1 className='Header'>Hello new test!</h1>
        <p className='content'>Things and such</p>
        <div id='Second'>{<SecondElement text="parameters are cool and through other components"/>}</div> 
      </div>
    );
  }
}

ReactDOM.render(<FirstElemnet />, document.getElementById('root'))