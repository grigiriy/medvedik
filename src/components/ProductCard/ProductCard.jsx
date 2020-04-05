import React, { Component } from 'react';
import { Link } from 'gatsby';

import './module.ProductCard.scss';
class ProductCard extends Component {
  render() {
    const { name, price, imageSrc, slug } = this.props.content;

    return (
      <div className="card">
        <Link to={`/product/${slug}`}>
          <div className="card_image">
            <img src={require('../../images/' + imageSrc)} alt="" />
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
