import React, { Component } from 'react';
import './Index.css';

import imgUrl from '../images/image.png'

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <h1>Hello World from React !</h1>
        <img src={imgUrl} alt="react" />
      </div>
    );
  }
}

export default Index;
