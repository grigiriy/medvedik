import React, { Component } from 'react';

import ProductCard from '../ProductCard';

import Content from '../../assets/db/productList.js';

class ProductList extends Component {
  render() {
    return (
      <div class="container clearfix">
        {Content.products.map((item, index) => (
          <ProductCard content={item} />
        ))}
      </div>
    );
  }
}

export default ProductList;
