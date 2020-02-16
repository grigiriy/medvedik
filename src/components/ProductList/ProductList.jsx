import React, { Component } from 'react';

import ProductCard from '../ProductCard';

import Content from '../../assets/db/productList.js';

class ProductList extends Component {
  render() {
    return (
      <div className="container clearfix">
        {Object.keys(Content.products).map((item, index) => (
          <ProductCard content={Content.products[item]} />
        ))}
      </div>
    );
  }
}

export default ProductList;
