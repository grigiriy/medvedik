import React, { Component } from 'react';

import PreviewCard from '../PreviewCard';

import Content from '../../assets/db/productList.js';

class PreviewList extends Component {
  render() {
    return (
      <div className="container columns">
        {Object.keys(Content.products).map((item, index) => (
          <PreviewCard content={Content.products[item]} key={item.id} />
        ))}
      </div>
    );
  }
}

export default PreviewList;
