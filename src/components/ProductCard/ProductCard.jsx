import React, { Component } from 'react';

import './styles.scss';
class ProductCard extends Component {
  render() {
    const { name, price, imageSrc } = this.props.content;
    return (
      <div className="card">
        <div className="card_image">
          <img src={require('../../assets/images/' + imageSrc)} alt="" />
        </div>
        <div className="card_attributes">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
