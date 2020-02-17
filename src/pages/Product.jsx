import React from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import ProductList from '../components/ProductList';

import Content from '../assets/db/productList.js';

function Product({ match }) {
  const product = Content.filter(item => item.slug === match.params.slug)[0];
  const productDetails = {
    left: {
      imageSrc: product.imageSrc,
      linkTo: null,
      headLine: null,
      text: null
    },
    right: {
      imageSrc: null,
      linkTo: null,
      headLine: product.name,
      text: product.description,
      price: product.price
    }
  };

  return (
    <>
      <MainScreen content={productDetails} />
      <PromoList />
      <ProductList />
    </>
  );
}

export default Product;
