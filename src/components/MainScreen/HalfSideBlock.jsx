import React, { Component } from 'react';

import left_img from '../../assets/images/left_img.jpg';
import right_img from '../../assets/images/right_img.jpg';

let left = {
  image: left_img,
  text: 'ручная',
  position: 'left',
  linkTo: ''
};

let right = {
  image: right_img,
  text: 'вышивка',
  position: 'right',
  linkTo: ''
};

class HalfSideBlock extends Component {
  render() {
    const side = this.props.side;
    const content = side === 'left' ? left : side === 'right' ? right : 'error';

    return (
      <div
        className={'halfScreenBlock ' + content.position}
        style={{ backgroundImage: `url(${content.image})` }}
      >
        <p className="h3">{content.text}</p>
      </div>
    );
  }
}

export default HalfSideBlock;
