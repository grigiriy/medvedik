import React from 'react';
import MainScreen from '../components/MainScreen';
import PromoList from '../components/PromoList';
import ProductList from '../components/ProductList';

import Content from '../assets/db/productList.js';

function Product({ match }) {
  // const productDetails = {
  //   left: Content.products[match.params.slug],
  //   right: Content.products[match.params.slug]
  // };

  const productDetails = {
    left: {
      imageSrc: Content.products[match.params.slug].imageSrc,
      linkTo: null,
      headLine: null,
      text: null
    },
    right: {
      imageSrc: null,
      linkTo: null,
      headLine: Content.products[match.params.slug].name,
      text: Content.products[match.params.slug].description,
      price: Content.products[match.params.slug].price
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
