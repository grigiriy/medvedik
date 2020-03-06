import React, { Component } from 'react';
import { Link } from 'gatsby';

import './styles.scss';

class HalfSideBlock extends Component {
  state = {
    color: null,
    size: null
  };

  selectAtt = (value, att) => {
    console.log(att);
    this.setState({
      [att]: value
    });
  };

  render() {
    const {
      imageSrc,
      headLine,
      text,
      price,
      sizes,
      colors,
      product
    } = this.props.side;

    function ImagedBlock() {
      const classList = product ? 'halfScreenBlock product' : 'halfScreenBlock';
      return (
        <div
          className={classList}
          style={{
            backgroundImage: `url(${require('../../images/' + imageSrc)})`
          }}
        >
          <p className="h3">{headLine}</p>
        </div>
      );
    }

    function TextBlock() {
      return (
        <div className={'halfScreenBlock textOnly '}>
          <p className="h4">{headLine}</p>
          <p>{text}</p>
        </div>
      );
    }

    function ProductBlock(props) {
      return (
        <div className={'halfScreenBlock textOnly '}>
          <p className="h4 header">{headLine}</p>
          <p>{text}</p>
          <p className="attributes">
            <span>Ручная вышивка</span>
            <span>100% хлопок</span>
            <span className="grouped">
              {sizes.map((item, index) => (
                <span
                  key={item}
                  onClick={() => {
                    props.selectAtt(item, 'size');
                  }}
                >
                  {item}
                </span>
              ))}
            </span>
            <span className="small">Размерная сетка</span>
            <span className="grouped">
              {colors.map((item, index) => (
                <span
                  key={item[1]}
                  onClick={() => {
                    props.selectAtt(item[1], 'color');
                  }}
                  className="colorItem"
                  style={{
                    backgroundColor: item[1]
                  }}
                ></span>
              ))}
            </span>
          </p>

          <div className="ordering">
            <p className="h4">{price} ₽</p>
            <Link to={'/'}>
              <button>Заказать</button>
            </Link>
          </div>

          <div className="orderDirections">
            <p>
              Обратите внимание, что отправка производится через 2-3 дня после
              заказа.
            </p>
            <Link to={'/'}>Подробнее</Link>
          </div>
        </div>
      );
    }

    if (imageSrc) {
      return <ImagedBlock />;
    } else if (price) {
      return <ProductBlock selectAtt={this.selectAtt} />;
    }
    return <TextBlock />;
  }
}

export default HalfSideBlock;
