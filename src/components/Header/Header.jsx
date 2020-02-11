import React, { Component } from 'react';

import './styles.scss';

import Content from '../../assets/db/navMenu.js';

class MainScreen extends Component {
  render() {
    return (
      <header>
        <ul className="topMenu">
          {Content.items.map((item, index) => (
            <li>
              {item.link === null ? (
                <hr />
              ) : (
                <a href={item.link}>{item.name}</a>
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
