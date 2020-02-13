import React from 'react';
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import CatalogMenu from './components/CatalogMenu';
import PromoList from './components/PromoList';
import ProductList from './components/ProductList';
import PreviewList from './components/PreviewList';

import './assets/scss/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <PromoList />
      <PreviewList />
    </div>
  );
}

export default App;
