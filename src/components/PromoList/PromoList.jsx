import React, { Component } from 'react';

import PromoCard from '../PromoCard';

class PromoList extends Component {
  render() {
    return (
      <div className="container fluid d-flex no-wrap">
        <PromoCard
          center={false}
          image={'left'}
          headLine={'Коробочка'}
          content={'Любви'}
        />
        <PromoCard
          center={true}
          image={'left'}
          headLine={[
            'футболки',
            'худи',
            'свитшоты',
            'наборы',
            'книги',
            'интерьер',
            'свой дизайн'
          ]}
          content={null}
        />
        <PromoCard
          center={false}
          image={'right'}
          headLine={'Парные'}
          content={'наборы к 14 февраля'}
        />
      </div>
    );
  }
}

export default PromoList;
