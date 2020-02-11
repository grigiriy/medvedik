import React, { Component } from 'react';

import './styles.scss';

class PromoCard extends Component {
  render() {
    const { imageSrc, headLine, content, center } = this.props.content;

    function CentralCard() {
      return (
        <div className="col center d-flex">
          <ul>
            {headLine.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <div>
            <img src={require('../../assets/images/' + imageSrc)} alt="" />
          </div>
        </div>
      );
    }

    function SideCard() {
      return (
        <div
          className="col side"
          style={{
            backgroundImage: `url(${require('../../assets/images/' +
              imageSrc)})`
          }}
        >
          <div>
            <p className="h3">{headLine}</p>
            <p className="h4">{content}</p>
          </div>
        </div>
      );
    }

    if (center) {
      return <CentralCard />;
    }
    return <SideCard />;
  }
}

export default PromoCard;
