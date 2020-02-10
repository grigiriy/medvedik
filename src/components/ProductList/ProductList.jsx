import React, { Component } from 'react';

import ProductCard from '../ProductCard';

import ProductsList from '../../assets/db/productList.js';

class ProductList extends Component {
  render() {
    return (
      <div class="container">
        {ProductsList.products.map((item, index) => (
          <ProductCard content={item} />
        ))}
      </div>
    );
  }
}

export default ProductList;
