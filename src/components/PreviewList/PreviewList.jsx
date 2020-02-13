import React, { Component } from 'react';

import PreviewCard from '../PreviewCard';

import Content from '../../assets/db/productList.js';

class PreviewList extends Component {
  render() {
    return (
      <div className="container columns">
        {Content.products.map((item, index) => (
          <PreviewCard content={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default PreviewList;
