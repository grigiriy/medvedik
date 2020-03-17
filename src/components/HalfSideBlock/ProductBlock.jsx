import React from 'react';
import { Link } from 'gatsby';

function ProductBlock(props) {
  const { headLine, text, price, sizes, colors } = props.side;

  const { mobile } = props;
  let classList = mobile
    ? 'halfScreenBlock textOnly mobileView'
    : 'halfScreenBlock textOnly';
  return (
    <div className={classList}>
      <p className="h4 header">{headLine}</p>
      <p>{text}</p>
      <p className="attributes">
        <span>Ручная вышивка</span>
        <span>100% хлопок</span>
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

export default ProductBlock;
