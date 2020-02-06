import React, { Component } from 'react';
import HalfSideBlock from './HalfSideBlock';

import './styles.scss';

class MainScreen extends Component {
  render() {
    return (
      <section className="mainBlock">
        <HalfSideBlock />
        <HalfSideBlock />
      </section>
    );
  }
}

export default MainScreen;
