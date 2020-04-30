import React, { Component } from 'react';

import PromoCard from '../PromoCard';

import Content from '../../assets/db/promoList.js';

class PromoList extends Component {
  render() {
    return (
      // <div className="container fluid d-flex">
      <div className="container  d-flex">
        {/* {Content.items.map(item => (
          <PromoCard content={item} key={item.id} />
        ))} */}
        <PromoCard content={Content.items[1]} />
      </div>
    );
  }
}

export default PromoList;
