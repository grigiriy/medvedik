import React, { Component } from 'react';

import './styles.scss';

import left_img from '../../assets/images/loveBox.jpg';
import right_img from '../../assets/images/coupleBox.jpg';
import centralContent from '../../assets/images/heart.png';

class PromoCard extends Component {
  render() {
    const { image } = this.props;
    const { headLine } = this.props;
    const { content } = this.props;
    const { center } = this.props;

    const backImage =
      image === 'left' ? left_img : image === 'right' ? right_img : null;

    function CentralCard() {
      return (
        <div className="col center d-flex">
          <ul>
            {headLine.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <div>
            <img src={centralContent} alt="" />
          </div>
        </div>
      );
    }

    function SideCard() {
      return (
        <div
          className="col side"
          style={{ backgroundImage: `url(${backImage})` }}
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
