import React from 'react';
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import CatalogMenu from './components/CatalogMenu';
import PromoCard from './components/PromoCard';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <div>
        <PromoCard />
        <PromoCard />
        <PromoCard />
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
