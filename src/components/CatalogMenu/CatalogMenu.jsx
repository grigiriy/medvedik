import React, { Component } from 'react';

import './styles.scss';

import Content from '../../assets/db/catalogMenu.js';

class ProductCard extends Component {
  render() {
    return (
      <ul className="catalog-menu">
        {Content.items.map((item, index) => (
          <li>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductCard;
