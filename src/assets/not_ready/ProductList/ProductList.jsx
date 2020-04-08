import React, { Component } from 'react';

import ProductCard from '../ProductCard';

import Content from '../../assets/db/productList.js';

class ProductList extends Component {
  render() {
    const { category } = this.props;

    const filtred = Content.filter(item => item.category[0] === category);

    const content = typeof category !== 'undefined' ? filtred : Content;

    return (
      <div className="container clearfix">
        {Object.keys(content).map((item, index) => (
          <ProductCard content={content[item]} key={content[item].id} />
        ))}
      </div>
    );
  }
}

export default ProductList;
