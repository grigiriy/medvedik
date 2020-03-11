import React, { Component } from 'react';
import HalfSideBlock from '../HalfSideBlock';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './styles.scss';

class MainScreen extends Component {
  render() {
    const { left, right } = this.props.content;

    let classList = this.props.mobile ? 'mainBlock mobileView ' : 'mainBlock ';

    return (
      <ReactCSSTransitionGroup
        transitionName="mainScreen"
        transitionAppear={true}
        transitionAppearTimeout={1200}
        transitionEnter={false}
        transitionLeave={false}
        component="section"
        className={classList}
      >
        <HalfSideBlock
          classNames={this.props.classNames}
          side={left}
          mobile={this.props.mobile ? this.props.mobile : false}
        />
        <HalfSideBlock
          classNames={this.props.classNames}
          side={right}
          mobile={this.props.mobile ? this.props.mobile : false}
        />
      </ReactCSSTransitionGroup>
    );
  }
}

export default MainScreen;
