import React from 'react';

import PromoList from '../components/PromoList';
import CatalogMenu from '../components/CatalogMenu';
import ProductList from '../components/ProductList';

function Shop({ match }) {
  console.log(match);
  return (
    <>
      <PromoList />
      <CatalogMenu />
      <ProductList category={match.params.sub} />
    </>
  );
}

export default Shop;
