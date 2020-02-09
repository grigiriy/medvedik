import React from 'react';
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import CatalogMenu from './components/CatalogMenu';
import PromoList from './components/PromoList';
import ProductList from './components/ProductList';

import './assets/scss/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <PromoList />
      <div class="container">
        <CatalogMenu />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
