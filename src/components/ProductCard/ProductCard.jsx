import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
class ProductCard extends Component {
  render() {
    const { name, price, imageSrc, slug } = this.props.content;

    return (
      <div className="card">
        <Link to={`/product/${slug}`}>
          <div className="card_image">
            <img src={require('../../assets/images/' + imageSrc)} alt="" />
          </div>
          <div className="card_attributes">
            <p>{name}</p>
            <p>{price}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;
