import React, { Component } from 'react';

import ProductCard from '../ProductCard';

class ProductList extends Component {
  render() {
    return (
      <div class="container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    );
  }
}

export default ProductList;
