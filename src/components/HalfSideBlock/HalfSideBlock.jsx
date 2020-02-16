import React, { Component } from 'react';

import './styles.scss';

class HalfSideBlock extends Component {
  render() {
    const { imageSrc, headLine, position, link, text } = this.props.side;

    function ImagedBlock() {
      return (
        <div
          className={'halfScreenBlock ' + position}
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
        <div className={'halfScreenBlock textOnly ' + position}>
          <p className="h4">{headLine}</p>
          <p>{text}</p>
        </div>
      );
    }

    if (imageSrc) {
      return <ImagedBlock />;
    }
    return <TextBlock />;
  }
  Ъ;
}

export default HalfSideBlock;
