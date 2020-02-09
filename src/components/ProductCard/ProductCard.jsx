import React, { Component } from 'react';

import card_a from '../../assets/images/loveBox.jpg';
import card_b from '../../assets/images/coupleBox.jpg';
import card_c from '../../assets/images/heart.png';
import card_d from '../../assets/images/loveBox.jpg';
import card_e from '../../assets/images/coupleBox.jpg';
import card_f from '../../assets/images/heart.png';

import './styles.scss';

class ProductCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card_image">
          <img src={card_a} alt="" />
        </div>
        <div className="card_attributes">
          <p>Drums</p>
          <p>1600 ₽</p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
