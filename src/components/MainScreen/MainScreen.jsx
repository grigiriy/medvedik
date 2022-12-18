import React from 'react';
import HalfSideBlock from '../HalfSideBlock';
import { CSSTransitionGroup } from 'react-transition-group';

import './module.MainScreen.scss';

class MainScreen extends React.Component {
  render() {
    const { left, right } = this.props.content;

    let classList = this.props.mobile ? 'mainBlock mobileView ' : 'mainBlock ';
    classList += this.props.classNames ? this.props.classNames : '';
    return (
      <section
        // transitionName="mainScreen"
        // transitionAppear={true}
        // transitionAppearimeout={0}
        // transitionLeave={false}
        className={classList}
      >
        <HalfSideBlock
          side={left}
          mobile={this.props.mobile ? this.props.mobile : false}
          orderDetails={this.props.orderDetails}
          updateOrderDetails={this.props.updateOrderDetails}
        />
        <HalfSideBlock
          orderDetails={this.props.orderDetails}
          updateOrderDetails={this.props.updateOrderDetails}
          side={right}
          mobile={this.props.mobile ? this.props.mobile : false}
        />
      </section>
    );
  }
}

export default MainScreen;
