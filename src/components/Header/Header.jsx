import React, { Component } from 'react';
import { Link } from 'gatsby';

import './styles.scss';

import Content from '../../assets/db/navMenu.js';

class Header extends Component {
  state = {
    open: false
  };

  toggleBurger = e => {
    this.setState({
      open: e
    });
  };

  render() {
    return (
      <header className={this.state.open && 'active'}>
        <ul className="topMenu">
          {Content.items.map(item => (
            <li key={item.link}>
              {item.link === null ? (
                <hr />
              ) : (
                <Link to={`/${item.link}`}>{item.name}</Link>
              )}
            </li>
          ))}
          <li key="ig" className="igSvg">
            <a href="https://www.instagram.com/mashamedvedik/">
              <img src={require('../../images/ig.svg')} alt="" />
            </a>
          </li>
        </ul>
        {this.props.mobile && (
          <div
            id="burger"
            onClick={() => {
              this.toggleBurger(!this.state.open);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <h1 className="headerBack">Masha Medvedik</h1>
      </header>
    );
  }
}

export default Header;
