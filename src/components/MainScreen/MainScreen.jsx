import React, { Component } from 'react';
import HalfSideBlock from '../HalfSideBlock';

import './styles.scss';

class MainScreen extends Component {
  render() {
    const { left, right } = this.props.content;

    let classList = this.props.mobile ? 'mainBlock mobileView' : 'mainBlock';

    return (
      <section className={classList}>
        <HalfSideBlock
          side={left}
          mobile={this.props.mobile ? this.props.mobile : false}
        />
        <HalfSideBlock
          side={right}
          mobile={this.props.mobile ? this.props.mobile : false}
        />
      </section>
    );
  }
}

export default MainScreen;
