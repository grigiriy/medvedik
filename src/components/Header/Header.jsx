import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import Content from '../../assets/db/navMenu.js';

class MainScreen extends Component {
  render() {
    return (
      <header>
        <ul className="topMenu">
          {Content.items.map((item, index) => (
            <li key={index}>
              {item.link === null ? (
                <hr />
              ) : (
                <Link to={item.link}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
        <h1 className="headerBack">Masha Medvedik</h1>
      </header>
    );
  }
}

export default MainScreen;
