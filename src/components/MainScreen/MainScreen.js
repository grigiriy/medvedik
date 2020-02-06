import React, { Component } from 'react';
import HalfSideBlock from './HalfSideBlock';

class MainScreen extends Component {
  render() {
    return (
      <section>
        <HalfSideBlock />
        <HalfSideBlock />
      </section>
    );
  }
}

export default MainScreen;
