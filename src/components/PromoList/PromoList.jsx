import React, { Component } from 'react';

import PromoCard from '../PromoCard';

import Content from '../../assets/db/promoList.js';

class PromoList extends Component {
  render() {
    return (
      <div className="container fluid d-flex no-wrap">
        {Content.products.map((item, index) => (
          <PromoCard content={item} />
        ))}
      </div>
    );
  }
}

export default PromoList;
