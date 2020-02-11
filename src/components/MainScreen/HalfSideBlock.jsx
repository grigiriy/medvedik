import React, { Component } from 'react';

class HalfSideBlock extends Component {
  render() {
    const { imageSrc, text, position, link } = this.props.side;

    return (
      <div
        className={'halfScreenBlock ' + position}
        style={{
          backgroundImage: `url(${require('../../assets/images/' + imageSrc)})`
        }}
      >
        <p className="h3">{text}</p>
      </div>
    );
  }
}

export default HalfSideBlock;
