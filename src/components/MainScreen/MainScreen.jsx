import React, { Component } from 'react';
import HalfSideBlock from '../HalfSideBlock';

import './styles.scss';

class MainScreen extends Component {
  render() {
    const { left, right } = this.props.content;
    return (
      <section className="mainBlock">
        <HalfSideBlock side={left} />
        <HalfSideBlock side={right} />
      </section>
    );
  }
}

export default MainScreen;
