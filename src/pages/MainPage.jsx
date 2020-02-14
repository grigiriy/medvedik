import React from 'react';
import MainScreen from '../components/MainScreen';
import CatalogMenu from '../components/CatalogMenu';
import PromoList from '../components/PromoList';
import ProductList from '../components/ProductList';
import PreviewList from '../components/PreviewList';

function MainPage() {
  return (
    <>
      <MainScreen />
      <PromoList />
      <PreviewList />
    </>
  );
}

export default MainPage;
