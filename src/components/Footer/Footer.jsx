import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import Content from '../../assets/db/navMenu.js';

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <footer>
          <ul className="botMenu">
            {Content.items.map(item => {
              if (item.inFooter)
                return (
                  <li key={item.link}>
                    {item.link === null ? (
                      <hr />
                    ) : (
                      <Link to={`/${item.link}`}>{item.name}</Link>
                    )}
                  </li>
                );
              return null;
            })}
            <li key="ig" className="igSvg">
              <Link to="https://www.instagram.com/mashamedvedik/">
                <img src={require('../../assets/images/ig.svg')} alt="" />
              </Link>
            </li>
          </ul>
          <h1 className="footerBack">Masha Medvedik</h1>
        </footer>
      </section>
    );
  }
}

export default Footer;
