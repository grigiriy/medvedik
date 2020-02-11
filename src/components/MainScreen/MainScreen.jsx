import React, { Component } from 'react';
import HalfSideBlock from './HalfSideBlock';

import './styles.scss';

import Content from '../../assets/db/mainScreen.js';
class MainScreen extends Component {
  render() {
    return (
      <section className="mainBlock">
        <HalfSideBlock side={Content.left} />
        <HalfSideBlock side={Content.right} />
      </section>
    );
  }
}

export default MainScreen;
