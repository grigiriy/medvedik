import React, { Component } from 'react';
import { Link } from 'gatsby';

import './styles.scss';

class PromoCard extends Component {
  render() {
    const { imageSrc, headLine, content, center, link } = this.props.content;

    function CentralCard() {
      return (
        <div className="col center d-flex">
          <ul>
            {headLine.map(item => {
              return (
                <li key={item[1]}>
                  <Link to={item[1]}>{item[0]}</Link>
                </li>
              );
            })}
          </ul>
          <div>
            <img src={require('../../images/' + imageSrc)} alt="" />
          </div>
        </div>
      );
    }

    function SideCard() {
      return (
        <Link
          to={link}
          className="col side"
          style={{
            backgroundImage: `url(${require('../../images/' + imageSrc)})`
          }}
        >
          <div>
            <p className="h3">{headLine}</p>
            <p className="h4">{content}</p>
          </div>
        </Link>
      );
    }

    if (center) {
      return <CentralCard />;
    }
    return <SideCard />;
  }
}

export default PromoCard;
