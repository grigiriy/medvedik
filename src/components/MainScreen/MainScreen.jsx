import React, { Component } from 'react';
import HalfSideBlock from '../HalfSideBlock';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './module.MainScreen.scss';

class MainScreen extends Component {
  render() {
    const { left, right } = this.props.content;

    let classList = this.props.mobile ? 'mainBlock mobileView ' : 'mainBlock ';
    classList += this.props.classNames ? this.props.classNames : '';
    return (
      <ReactCSSTransitionGroup
        transitionName="mainScreen"
        transitionAppear={true}
        transitionAppearimeout={0}
        transitionLeave={false}
        component="section"
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
      </ReactCSSTransitionGroup>
    );
  }
}

export default MainScreen;
