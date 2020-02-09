import React, { Component } from 'react';

import './styles.scss';

class ProductCard extends Component {
  render() {
    return (
      <ul className="catalog-menu">
        <li>Футболки</li>
        <li>Толстовки</li>
        <li>Рубашки</li>
        <li>Интерьер</li>
        <li>Свой дизайн</li>
      </ul>
    );
  }
}

export default ProductCard;
