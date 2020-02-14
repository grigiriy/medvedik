import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import Content from '../../assets/db/catalogMenu.js';

class ProductCard extends Component {
  render() {
    return (
      <ul className="catalog-menu">
        {Content.items.map((item, index) => (
          <li>
            <Link to={`/shop/${item.link}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductCard;
