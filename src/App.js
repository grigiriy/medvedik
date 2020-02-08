import React from 'react';
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import CatalogMenu from './components/CatalogMenu';
import PromoCard from './components/PromoCard';
import ProductCard from './components/ProductCard';

import './assets/scss/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <div className="d-flex">
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
      <div>
        <CatalogMenu />
      </div>
      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
