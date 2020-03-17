import React, { Component } from 'react';

import TextBlock from './TextBlock.jsx';
import ProductBlock from './ProductBlock.jsx';
import ImagedBlock from './ImagedBlock.jsx';
import OrderBlock from './Order/OrderBlock.jsx';
import ConstructorBlock from './Order/ConstructorBlock.jsx';

import './styles.scss';

class HalfSideBlock extends Component {
  state = {
    color: null,
    size: null,
    type: 'shirt'
  };

  selectAtt = (value, att) => {
    this.setState({
      [att]: value
    });
  };

  setColor = e => {
    this.setState({
      color: e
    });
  };

  render() {
    const { imageSrc, price, order } = this.props.side;

    if (imageSrc) {
      if (order) {
        return <ConstructorBlock />;
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
            mobile={this.props.mobile}
            setColor={this.setColor}
            selectAtt={this.selectAtt}
            type={this.state.type}
            size={this.state.size}
            color={this.state.color}
          />
        );
      }
      return (
        <ProductBlock
          selectAtt={this.selectAtt}
          side={this.props.side}
          mobile={this.props.mobile}
        />
      );
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
