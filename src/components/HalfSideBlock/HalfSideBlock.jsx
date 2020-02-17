import React, { Component } from 'react';

import './styles.scss';

class HalfSideBlock extends Component {
  render() {
    const { imageSrc, headLine, text, price } = this.props.side;

    function ImagedBlock() {
      return (
        <div
          className={'halfScreenBlock '}
          style={{
            backgroundImage: `url(${require('../../assets/images/' +
              imageSrc)})`
          }}
        >
          <p className="h3">{headLine}</p>
        </div>
      );
    }

    function TextBlock() {
      return (
        <div className={'halfScreenBlock textOnly '}>
          <p className="h4">{headLine}</p>
          <p>{text}</p>
        </div>
      );
    }

    function ProductBlock() {
      return (
        <div className={'halfScreenBlock textOnly '}>
          <p className="h4">{headLine}</p>
          <p>{text}</p>
          <p className="h4">{price} ₽</p>
        </div>
      );
    }

    if (imageSrc) {
      return <ImagedBlock />;
    } else if (price) {
      return <ProductBlock />;
    }
    return <TextBlock />;
  }
}

export default HalfSideBlock;
