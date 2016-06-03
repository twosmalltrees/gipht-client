import React, { Component } from 'react';
import Navbar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Navbar />
      </div>
    );
  }
}
