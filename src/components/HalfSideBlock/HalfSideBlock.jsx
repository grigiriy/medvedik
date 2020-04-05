import React, { Component } from 'react';

import TextBlock from './TextBlock.jsx';
import ProductBlock from './ProductBlock.jsx';
import ImagedBlock from './ImagedBlock.jsx';
import OrderBlock from './Order/OrderBlock.jsx';
import ConstructorBlock from './Order/ConstructorBlock.jsx';

import './module.HalfSideBlock.scss';

class HalfSideBlock extends Component {
  render() {
    const { imageSrc, price, order } = this.props.side;

    if (imageSrc) {
      if (order) {
        return (
          <ConstructorBlock
            updateOrderDetails={this.props.updateOrderDetails}
            orderDetails={this.props.orderDetails}
            mobile={this.props.mobile}
          />
        );
      }
      return (
        <ImagedBlock
          side={this.props.side}
          classNames={this.props.classNames}
          mobile={this.props.mobile}
        />
      );
    } else if (price) {
      if (order) {
        return (
          <OrderBlock
            side={this.props.side}
            classNames={this.props.classNames}
            updateOrderDetails={this.props.updateOrderDetails}
            orderDetails={this.props.orderDetails}
            mobile={this.props.mobile}
          />
        );
      }
      return <ProductBlock side={this.props.side} mobile={this.props.mobile} />;
    }
    return (
      <TextBlock
        side={this.props.side}
        classNames={this.props.classNames}
        mobile={this.props.mobile}
      />
    );
  }
}

export default HalfSideBlock;
